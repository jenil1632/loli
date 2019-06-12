const moment = require('moment');

//returns message data
let generateMessage = (from, text)=>{
  return { from, text, createdAt: moment().valueOf()};
};

module.exports = {generateMessage};
