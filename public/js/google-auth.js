var googleUser = {};
var startApp = function() {
  gapi.load('auth2', function(){
      auth2 = gapi.auth2.init({
      client_id: '213402661081-neff15tf41rs2u28p2g3adm9t71of1h4.apps.googleusercontent.com',
      cookiepolicy: 'single_host_origin',
    });
    attachSignin(document.getElementById('g-signin'));
  });
};

function attachSignin(element) {
  auth2.attachClickHandler(element, {},
      function(googleUser) {
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
