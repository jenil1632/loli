let flag = false;
let sm = ["fb", "instagram", "youtube", "twitter"];

$(window).resize(function() {
  if($(window).width()<600)
  {
    $('#overview').show();
    $('#photo-container').show();
    flag = true;
  }
  else if($(window).width()>=600 && flag == true){
    $('#overview-heading').addClass('selected');
    $('#photo-heading').removeClass('selected');
    $('#photo-container').hide();
    $('#overview').show();
    flag = false;
  }
});

$('#photo-heading').on('click', ()=>{
  $('#photo-heading').addClass('selected');
  $('#overview-heading').removeClass('selected');
  $('#overview').hide();
  $('#photo-container').show();
});

$('#overview-heading').on('click', ()=>{
  $('#overview-heading').addClass('selected');
  $('#photo-heading').removeClass('selected');
  $('#photo-container').hide();
  $('#overview').show();
});

let $overlay = $('<div id = "overlay-review"></div>');
let modalString = '<div id = "reviewBox"><h3 class = "modal-heading">Select a platform</h3><img src = "img/close.svg" class = "close"/><div style = "display: flex; justify-content: center">';


$('#addSocialMedia').on('click', ()=>{
    let str = "";
    for(let i = 0;i<sm.length;i++){
      str += `<img src = "img/social-${sm[i]}.svg" id = "${sm[i]}"style = "height: 35px; width: 35px; margin: 8px"/>`;
    }
    modalString += str;
    modalString += "</div></div>";
    let $reviewBox = $(modalString);
    $($overlay).append($reviewBox);
    $('body').append($overlay);
    $('#overlay-review').show();
    $('#fb').on('click', ()=>{
      sm = sm.filter(media => media != 'fb');
      $('#socialMediaLinks').prepend('<div class = "socialMediaLink"><label for = "fb">Facebook</label><input type="text" placeholder = "www.facebook.com/something" name = "fb" style="margin-bottom: 4px"/></div>');
      $('#overlay-review').remove();
      if(sm.length == 0)
      {
        $('#addSocialMedia').remove();
      }
      $overlay = $('<div id = "overlay-review"></div>');
      modalString = '<div id = "reviewBox"><h3 class = "modal-heading">Select a platform</h3><img src = "img/close.svg" class = "close"/><div style = "display: flex; justify-content: center">';
    });
    $('#instagram').on('click', ()=>{
      sm = sm.filter(media => media != 'instagram');
      $('#socialMediaLinks').prepend('<div class = "socialMediaLink"><label for = "instagram">Instagram</label><input type="text" placeholder = "www.instagram.com/something" name = "instagram" style="margin-bottom: 4px"/></div>');
      $('#overlay-review').remove();
      if(sm.length == 0)
      {
        $('#addSocialMedia').remove();
      }
      $overlay = $('<div id = "overlay-review"></div>');
      modalString = '<div id = "reviewBox"><h3 class = "modal-heading">Select a platform</h3><img src = "img/close.svg" class = "close"/><div style = "display: flex; justify-content: center">';
    });
    $('#youtube').on('click', ()=>{
      sm = sm.filter(media => media != 'youtube');
      $('#socialMediaLinks').prepend('<div class = "socialMediaLink"><label for = "youtube">Youtube</label><input type="text" placeholder = "www.youtube.com/something" name = "youtube" style="margin-bottom: 4px"/></div>');
      $('#overlay-review').remove();
      if(sm.length == 0)
      {
        $('#addSocialMedia').remove();
      }
      $overlay = $('<div id = "overlay-review"></div>');
      modalString = '<div id = "reviewBox"><h3 class = "modal-heading">Select a platform</h3><img src = "img/close.svg" class = "close"/><div style = "display: flex; justify-content: center">';
    });
    $('#twitter').on('click', ()=>{
      sm = sm.filter(media => media != 'twitter');
      $('#socialMediaLinks').prepend('<div class = "socialMediaLink"><label for = "twitter">Twitter</label><input type="text" placeholder = "www.twitter.com/something" name = "twitter" style="margin-bottom: 4px"/></div>');
      $('#overlay-review').remove();
      if(sm.length == 0)
      {
        $('#addSocialMedia').remove();
      }
      $overlay = $('<div id = "overlay-review"></div>');
      modalString = '<div id = "reviewBox"><h3 class = "modal-heading">Select a platform</h3><img src = "img/close.svg" class = "close"/><div style = "display: flex; justify-content: center">';
    });
    $('.close').on('click', ()=>{
      $('#overlay-review').remove();
      $overlay = $('<div id = "overlay-review"></div>');
      modalString = '<div id = "reviewBox"><h3 class = "modal-heading">Select a platform</h3><img src = "img/close.svg" class = "close"/><div style = "display: flex; justify-content: center">';
    });
});

$('#add-image').on('click', ()=>{
  $('#imageUpload').click();
});
