var googleUser = {};
var startApp = function() {
  gapi.load('auth2', function(){
    // Retrieve the singleton for the GoogleAuth library and set up the client.
    auth2 = gapi.auth2.init({
      client_id: '213402661081-neff15tf41rs2u28p2g3adm9t71of1h4.apps.googleusercontent.com',
      cookiepolicy: 'single_host_origin',
      // Request scopes in addition to 'profile' and 'email'
      //scope: 'additional_scope'
    });
    attachSignin(document.getElementById('g-signin'));
  });
};

function attachSignin(element) {
  auth2.attachClickHandler(element, {},
      function(googleUser) {
        //document.getElementById('name').innerText = "Signed in: " +
          //  googleUser.getBasicProfile().getName();
          onSignIn(googleUser);
      }, function(error) {
        alert(JSON.stringify(error, undefined, 2));
      });
}

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  let userData = {
    "fullname": profile.getName(),
    "emailid": profile.getEmail(),
    "idtoken": googleUser.getAuthResponse().id_token
  };
  $.ajax({
    url: 'g-auth',
    dataType: 'json',
    type: 'post',
    contentType: 'application/json',
    data: JSON.stringify(userData)
  }).done(function(data, status, xhr)
{
console.log('success');
}).fail(function(xhr, status, err){

});
}
