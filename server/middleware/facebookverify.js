const clientId = process.env.FB_CLIENTID;
const clientSecret = process.env.FB_CLIENTSECRET;
const fetch = require('node-fetch');

//Verifies user login through facebook api
 async function fb_verify(idtoken){
   try
   {
   let res = await fetch(`https://graph.facebook.com/oauth/access_token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`, {method: 'POST'});
         let access_token = res.access_token; //App token obtained
         let res2 = await fetch(`https://graph.facebook.com/debug_token?input_token=${idtoken}&access_token=${access_token}`, {method: 'POST'});
         let user_id = res2.user_id; // User successfully logged in to the app
         return user_id;
       }
    catch(err){
      console.log('not authenticated');
      return undefined;
    }
}

module.exports = {fb_verify}
