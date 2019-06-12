const mongoose = require('mongoose');

//establishes DB Connection
mongoose.Promise = global.Promise;
mongoose.connect( process.env.MONGODB_URI);

module.exports = {mongoose};
