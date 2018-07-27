

let emailid = $('#emailid').val();

function validateForm(){
  if(validatePassword() && validatePasswords() && validateUsername())
  return true;
  else
  {
    $('input[class="redborder"]').on('click', function(){
      $(this).next().remove();
      $(this).removeClass('redborder');
      $(this).off();
    });
    return false;
  }
}

function validatePassword(){
  let password = $('#password').val();
  if(password.length>7)
  return true;
  else
  {
    $("#password").addClass("redborder");
    let $message = $('<span class ="tips">Password should be longer than 7 characters!</span>');
    $("#password").after($message);
    return false;
  }
}

function validatePasswords()
{
  let password = $('#password').val();
  let confirmpassword = $('#confirmpassword').val();
  if(confirmpassword===password)
  return true;
  else
  {
    $("#confirmpassword").addClass("redborder");
    let $message = $('<span class ="tips">Passwords do not match!</span>');
    $("#confirmpassword").after($message);
    return false;
  }
}

function validateUsername()
{
  let username = $('#username').val();
  if(username.includes(' ') || username.includes('/') || username.includes('\\') || username.includes(':') || username.includes('*') || username.includes('?') || username.includes('\"') || username.includes('<') || username.includes('>') || username.includes('|') || username.includes('=') || username.includes(';') || username.includes(','))
  {
    $("#username").addClass("redborder");
    let $message = $('<span class ="tips">Please enter a valid Username. Only special characters [!, @, #, $, %, ^, &, (, ), +, ., _, -] are allowed. Spaces are not allowed!</span>');
    $("#username").after($message);
    return false;
  }
  else {
    return true;
  }
}

$('form').submit(function(event){
  let formdata = {
    "username": $('#username').val(),
    "password": $('#password').val(),
    "emailid": $('#emailid').val()
  };
  if(validateForm()==false)
  {
    event.preventDefault();
    return false;
  }

  $.ajax({
    url: 'signup',
    dataType: 'json',
    type: 'post',
    contentType: 'application/json',
    data: JSON.stringify(formdata)})
    .done(function(data, status, xhr)
    {

    })
    .fail(function(xhr, status, err){
      if(xhr.responseText.includes('password'))
        {
          $("#password").addClass("redborder");
          let $message = $('<span class ="tips">Password should be longer than 7 characters!</span>');
          $("#password").after($message);
        }
        else if(xhr.responseText.includes('username'))
        {
          $("#username").addClass("redborder");
          let $message = $('<span class ="tips">Username already taken!</span>');
          $("#username").after($message);
        }
        else if(xhr.responseText.includes('emailid'))
        {
          $("#emailid").addClass("redborder");
          let $message = $('<span class ="tips">emailid is invalid or already registered!</span>');
          $("#emailid").after($message);
        }
        else
        {
          $("#username").addClass("redborder");
          let $message = $('<span class ="tips">Username is not valid.</span>');
          $("#username").after($message);
        }
    }
  );

  event.preventDefault();

  $('input[class="redborder"]').on('click', function(){
    $(this).next().remove();
    $(this).removeClass('redborder');
    $(this).off();
  });
});
