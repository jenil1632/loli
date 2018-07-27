require('./config/config.js');
const express = require('express');
const {searchengine} = require('./searchengine.js');
const _ = require('lodash');
const {mongoose} = require('./db/mongoose.js');
const bodyparser = require('body-parser');
const {User} = require('./models/user.js');
const {authenticate} = require('./middleware/authenticate.js');
const cookieParser = require('cookie-parser');


const port = process.env.PORT;
let app = express();
app.use(bodyparser.json());
app.use(cookieParser());
app.use(express.static(__dirname+"/../public"));
app.get('/categories.js', (req, res)=>{
  let svalue = req.query.svalue;
  svalue = svalue.toLowerCase();
  let keywords = svalue.split(' ');
  let searchresultsproduct = [];
  let searchresultsservice = [];
  let searchresults = [];
  for(let i=0;i<keywords.length;i++)
  {
    searchresultsservice = searchengine(keywords[i], 'services');
    searchresultsproduct = searchengine(keywords[i], 'products');
    searchresults = searchresults.concat(searchresultsproduct, searchresultsservice);
  }
  res.send(_.uniqBy(searchresults, 'value'));
});
app.post('/signup', (req, res)=>{
 let user = new User({
   username: req.body.username,
   password: req.body.password,
   emailid: req.body.emailid,
   active: false
 });
 user.save().then(() =>{
   return user.generateAuthToken();
 })
 .then((token)=>{
   res.cookie('x-auth', token).send(user);
 }).then(()=>{
   var fullUrl = req.protocol + '://' + req.get('host') + '/verify';
   return user.emailverify(fullUrl);
   res.redirect('/emailnotice');
 })
 .catch((e) =>{
   res.status(400).send(e);
});
});

app.post('/login', (req, res)=>{
  let body = _.pick(req.body, ["username", "password"]);
  User.findByCredentials(body.username, body.password).then((user)=>{
    return user.generateAuthToken().then((token)=>{
      res.cookie('x-auth', token).send(user);
    });
  }).catch((e)=>{
    res.status(400).send(e);
  });
});

app.delete('/login', authenticate, (req, res)=>{
  req.user.removeToken(req.token).then(()=>{
    res.clearCookie('x-auth');
    res.status(200).send();
  }, ()=>{
    res.status(400).send();
  });
});

app.get('/verify', (req, res)=>{
  User.findById(req.query._id, { $set: {active: true}}, (err, user)=>{
    if(err)
    res.status(400).send();
    else
    res.status(200).send();
  });
});
app.listen(port);
