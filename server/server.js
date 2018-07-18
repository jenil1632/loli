const express = require('express');
const {searchengine} = require('./searchengine.js');
const _ = require('lodash');
const {mongoose} = require('./db/mongoose.js');
const bodyparser = require('body-parser');
const {User} = require('./models/user.js');
const {authenticate} = require('./middleware/authenticate.js');

const port = process.env.PORT || 3000;
let app = express();
app.use(bodyparser.json());
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
   emailid: req.body.emailid
 });
 user.save().then(() =>{
   return user.generateAuthToken();
 }).then((token)=>{
   res.header('x-auth', token).send(user)
 }).catch((e) =>{
   res.status(400).send(e);
});
});
app.listen(port);
