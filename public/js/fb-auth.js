function statusChangeCallback(response) {
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
    let tok = response.authResponse.accessToken;
    console.log('tok:' + tok);
    FB.api('/me', {fields: 'name, email'}, function(response) {
      let userData = {
        "fullname": response.name,
        "emailid": response.email,
        "idtoken": tok
      };
      console.log(userData);
     $.ajax({
       url: 'fb-auth',
       dataType: 'json',
       type: 'post',
       contentType: 'application/json',
       data: JSON.stringify(userData)
     }).done(function(data, status, xhr){
       console.log('success');
     }).fail(function(xhr, status, err){

     });
   });
  }
  else{
    console.log('User not signed in');
  }
}

function checkLoginState() {
   FB.getLoginStatus(function(response) {
     statusChangeCallback(response);
   });
 }

 $('#fb-signin').on('click', ()=>{
   FB.login(function(response){
     statusChangeCallback(response);
   }, {scope: 'email'});
 });
