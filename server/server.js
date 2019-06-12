require('./config/config.js');
const express = require('express');
const {searchengine} = require('./searchengine.js');
const _ = require('lodash');
const {mongoose} = require('./db/mongoose.js');
const bodyparser = require('body-parser');
const {User} = require('./models/user.js');
const {authenticate} = require('./middleware/authenticate.js');
const cookieParser = require('cookie-parser');
const path = require('path');
const publicPath = path.join(__dirname, '../public');
const socketIO = require('socket.io');
const http = require('http');
const {generateMessage} = require('./utils/message.js');
const {verify} = require('./middleware/googleverify.js');
const {fb_verify} = require('./middleware/facebookverify.js');


const port = process.env.PORT;
let app = express();
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.use(cookieParser());
app.use(express.static(publicPath));
let server = http.createServer(app);
let io = socketIO(server);


//suggestions displayed on main search bar
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


//signup
app.post('/signup', (req, res)=>{
  let ss = req.body.fullname.trim().replace(' ', '-');
  let user_name = ss + '-' + new Date().getTime();
 let user = new User({
   fullname: req.body.fullname,
   username: user_name,
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

app.get('/signup', (req, res)=>{
  res.redirect('/signup.html');
});


//google authentication
app.post('/g-auth', (req, res)=>{
  verify(req.body.idtoken)
  .then(()=>{
  return User.findOne({emailid: req.body.emailid})
}).then((user)=>{
  if(!user)
  {
    let ss = req.body.fullname.replace(' ', '-');
        let user_name = ss + '-' + new Date().getTime();
        let user = new User({
         fullname: req.body.fullname,
         username: user_name,
         emailid: req.body.emailid,
         active: true
       });
       return user.save();
  }
}).then((user)=>{
  let token = user.generateAuthToken();
  res.cookie('x-auth', token).send(user);
})
  .catch(console.error);
});


//facebook authentication
app.post('/fb-auth', (req, res)=>{
  let user_id = fb_verify(req.body.idtoken);console.log('user_id:' + user_id);
  if(user_id)
  {
    User.findOne({emailid: req.body.emailid}).then((user)=>{
      if(!user)
      {
        let ss = req.body.fullname.replace(' ', '-');
            let user_name = ss + '-' + new Date().getTime();
            let user = new User({
             fullname: req.body.fullname,
             username: user_name,
             emailid: req.body.emailid,
             active: true
           });
           return user.save();
      }
    }).then((user)=>{
      let token = user.generateAuthToken();
      res.cookie('x-auth', token).send(user);
    })
      .catch(console.error);
  }
});


//login authentication
app.post('/login', (req, res)=>{
  let body = _.pick(req.body, ["emailid", "password"]);
  User.findByCredentials(body.emailid, body.password).then((user)=>{
    return user.generateAuthToken().then((token)=>{
      res.cookie('x-auth', token).send(user);
    });
  }).catch((e)=>{
    res.status(400).send(e);
  });
});


//redirection to login page
app.get('/login', (req, res)=>{
  res.redirect('/login.html');
});


//logout
app.delete('/login', authenticate, (req, res)=>{
  req.user.removeToken(req.token).then(()=>{
    res.clearCookie('x-auth');
    res.status(200).send();
  }, ()=>{
    res.status(400).send();
  });
});



//email verification successful
app.get('/verify', (req, res)=>{
  User.findById(req.query._id, { $set: {active: true}}, (err, user)=>{
    if(err)
    res.status(400).send();
    else
    res.status(200).send();
  });
});


//messaging app event listener
io.on('connection', (socket)=>{
  console.log('new user Connected');
  socket.on('disconnect', ()=>{
    console.log('user was disconnected');
  });
  socket.on('createMessage', (message, callback)=>{
    socket.broadcast.emit('newMessage', generateMessage(message.from, message.text));
    callback('This is from the server');
  });
});


server.listen(port, ()=>{
  console.log('Connected');
});
