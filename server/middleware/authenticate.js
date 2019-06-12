const {User} = require('./../models/user');


//checks wether the x-auth token in cookie sent by the browser matches the one stored in database
let authenticate = (req, res, next) =>
{
  let token = req.cookies['x-auth'];
  User.findByToken(token).then((user) =>{
    if(!user)
    {
      //User not found
      Promise.reject();
    }
    req.user = user;
    req.token = token;
    //User authenticated
    next();
  }).catch((e)=> {
    res.status(401).send();
  });
};

module.exports = {authenticate};
