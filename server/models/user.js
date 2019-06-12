const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');


//Normal user database schema (only login info)
let UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true
  },
  fullname: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: 40,
    validate: {
      validator: function(v) {
        return /^[a-zA-Z0-9! @#\$%\^\&\)\(+._-]+$/g.test(v);
      },
      message: '{VALUE} is not a valid full name!'
    }
  },
  password: {
    type: String,
    minlength: 8,
    trim: true
  },
  emailid: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email'
    }
  },
  active: {
    type: Boolean,
    required: true
  },
  tokens: [{
    access: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  }]
});

UserSchema.pre('save', function(next){
  var user = this;
  if(user.isModified('password'))
  {
    bcrypt.genSalt(10, (err, salt)=>{
      bcrypt.hash(user.password, salt, (err, hash)=>{
        user.password = hash;
        next();
      });
    });
  }
  else
  {
    next();
  }
});

UserSchema.methods.toJSON = function(){
  let user = this;
  let userObject = user.toObject();
  return _.pick(userObject, ['_id', 'emailid']);
};

UserSchema.methods.generateAuthToken = function(){
  let user = this;
  let access = 'auth';
  let token = jwt.sign({_id: user._id.toHexString(), access}, process.env.JWT_SECRET).toString();
  user.tokens = user.tokens.concat([{access, token}]);
  return user.save().then(() =>{
    return token;
  });
};

UserSchema.methods.removeToken = function(token){
  let user = this;
   return user.update({
    $pull: {
      tokens: {token}
    }
  });
};

UserSchema.methods.emailverify = function(url){
  let user = this;
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "thelocallistingapp@gmail.com",
      pass: process.env.EMAIL_PASSWORD
    }
  });
  let mailurl = url + '?_id=' + user._id.toString();
  let mailOptions = {
  from: 'thelocallistingapp@gmail.com',
  to: user.emailid,
  subject: 'Loli Account verification',
  html: '<h1>The Local Listing App</h1><h2>Dear '+user.username+' ,</h2><p>Verify your account by clicking on this link below:</p><p><a href = '+mailurl+'>Verification Link</a></p><h4>Note: This link deactivates after 3 days.</h4><h5>This is a system generated e-mail, please do not reply to it.</h5>'
};
return new Promise(function(resolve, reject){
  transporter.sendMail(mailOptions, function (err, info) {
     if(err)
       reject();
     else
       resolve(user);
  });
});

};

UserSchema.statics.findByToken = function(token){
  let User = this;
  let decoded;
  try{
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  }
  catch(e){
   return Promise.reject();
  }
  return User.findOne({
    '_id': decoded._id,
    'tokens.token': token,
    'tokens.access': 'auth'
  });
};

UserSchema.statics.findByCredentials = function(emailid, password){
  let User = this;
   return User.findOne({emailid}).then((user)=>{
     if(!user)
     {
       return Promise.reject();
     }
     return new Promise((resolve, reject)=>{
       bcrypt.compare(password, user.password, (err, res)=>{
         if(res)
         {
           resolve(user);
         }
         else{
           reject();
         }
       });
     });
   });
};

let User = mongoose.model('User', UserSchema);

module.exports = {User};
