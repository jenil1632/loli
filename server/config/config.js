//checks wether node app is running in production or development environment
var env = process.env.NODE_ENV || 'development';

//loads development environment variables from config.json file
if (env === 'development' || env === 'test') {
  var config = require('./config.json');
  var envConfig = config[env];

  Object.keys(envConfig).forEach((key) => {
    process.env[key] = envConfig[key];
  });
}
