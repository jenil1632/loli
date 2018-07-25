const {User} = require('./../models/user');

let authenticate = (req, res, next) =>
{
  let token = req.cookies['x-auth'];
  User.findByToken(token).then((user) =>{
    if(!user)
    {
      Promise.reject();
    }
    req.user = user;
    req.token = token;
    next();
  }).catch((e)=> {
    res.status(401).send();
  });
};

module.exports = {authenticate};
