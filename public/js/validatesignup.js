

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
  let username = $('#fullname').val();
  if(username.includes('/') || username.includes('\\') || username.includes(':') || username.includes('*') || username.includes('?') || username.includes('\"') || username.includes('<') || username.includes('>') || username.includes('|') || username.includes('=') || username.includes(';') || username.includes(','))
  {
    $("#fullname").addClass("redborder");
    let $message = $('<span class ="tips">Please enter a valid name. Only special characters [!, @, #, $, %, ^, &, (, ), +, ., _, -] are allowed.</span>');
    $("#fullname").after($message);
    return false;
  }
  else {
    return true;
  }
}

$('form').submit(function(event){
  let formdata = {
    "fullname": $('#fullname').val(),
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
        else if(xhr.responseText.includes('emailid'))
        {
          $("#emailid").addClass("redborder");
          let $message = $('<span class ="tips">emailid is invalid or already registered!</span>');
          $("#emailid").after($message);
        }
        else
        {
          $("#fullname").addClass("redborder");
          let $message = $('<span class ="tips">name is not valid.</span>');
          $("#fullname").after($message);
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
