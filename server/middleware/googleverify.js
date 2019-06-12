const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client('213402661081-neff15tf41rs2u28p2g3adm9t71of1h4.apps.googleusercontent.com');

//verify google sign in
async function verify(token) {
  const ticket = await client.verifyIdToken({
      idToken: token,
      audience: '213402661081-neff15tf41rs2u28p2g3adm9t71of1h4.apps.googleusercontent.com',  // Specify the CLIENT_ID of the app that accesses the backend
      // Or, if multiple clients access the backend:
      //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
  });
  const payload = ticket.getPayload();
  const userid = payload['sub'];
  // If request specified a G Suite domain:
  //const domain = payload['hd'];
}
module.exports = {verify};
