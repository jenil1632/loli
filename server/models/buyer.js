const mongoose = require('mongoose');
const validator = require('validator');
const _ = require('lodash');

let UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
  },
  fullname: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: 40,
    validate: {
      validator: function(v) {
        return /^[a-zA-Z ]+$/g.test(v);
      },
      message: '{VALUE} is not a valid userv!'
    }
  },
  mobilenumber: {
    type: Number,
    required: true,
    trim: true,
    validate: {
      validator: function(v) {
        if(v.toString().length==10)
        return true;
        else
        return false;
      },
      message: '{VALUE} is not a valid mobile number!'
    }
  },
  emailid: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
  },
   favourites: {
     type: Array
   },
    review: [
      {
        seller: {
          type: String
        },
        comment: {
          type: String,
          maxlength: 100
        },
        rating: {
          type: Number
          min: 1,
          max: 5
        }
      }
    ]
});

let Buyer = mongoose.model('Buyer', UserSchema);

module.exports = {Buyer};
