const mongoose = require('mongoose');
const validator = require('validator');
const _ = require('lodash');

//Normal seller database schema
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
  business_name: {
    type: String,
    required: true,
    trim: true,
    minlength: 1
    maxlength: 30,
  },
   product_list: {
     type: Array
   },
   business_number: {
     type: Number,
     required: true,
     trim: true,
     validate: {
       validator: function(v) {
         if(v.toString().length==10 || v.toString()==8)
         return true;
         else
         return false;
       },
       message: '{VALUE} is not a valid contact number!'
     }
   },
   business_address: {
     type: String,
     required: true,
     trim: true,
     minlength: 1,
     maxlength: 100
   },
   area_of_business: {
     type: Array,
     required: true
   },
   short_description: {
     type: String,
     maxlength: 50,
     required: true
   },
   long_description: {
     type: String,
     maxlength: 200
   },
   fb: {
     type: String
   },
    instagram: {
      type: String
    },
    twitter: {
      type: String
    },
    snapchat: {
      type: String
    },
    website: {
      type: String
    },
    review: [
      {
        reviewer: {
          type: String
        },
        comment: {
          type: String,
          maxlength: 100
        },
        rating: {
          type: Number,
          min: 1,
          max: 5
        }
      }
    ],
    total_rating: {
      type: Number,
      min: 1,
      max: 5
    },
    verified: {
      type: Boolean,
      required: true
    },
    premium: {
      type: Boolean,
      required: true
    },
    no_of_photos: {
      type: Number,
      required: true,
      default: 0,
      max: 25
    }
});

let Seller = mongoose.model('Seller', UserSchema);

module.exports = {Seller};
