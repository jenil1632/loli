let score = 0;
let flag = false;

$(window).resize(function() {
  if($(window).width()<600)
  {
    $('#overview').show();
    $('#photo-container').show();
    $('#reviews').show();
    flag = true;
  }
  else if($(window).width()>=600 && flag == true){
    $('#overview-heading').addClass('selected');
    $('#photo-heading').removeClass('selected');
    $('#review-heading').removeClass('selected');
    $('#reviews').hide();
    $('#photo-container').hide();
    $('#overview').show();
    flag = false;
  }
});

$('#review-heading').on('click', ()=>{
  $('#review-heading').addClass('selected');
  $('#photo-heading').removeClass('selected');
  $('#overview-heading').removeClass('selected');
  $('#overview').hide();
  $('#photo-container').hide();
  $('#reviews').show();
});

$('#photo-heading').on('click', ()=>{
  $('#photo-heading').addClass('selected');
  $('#review-heading').removeClass('selected');
  $('#overview-heading').removeClass('selected');
  $('#overview').hide();
  $('#photo-container').show();
  $('#reviews').hide();
});

$('#overview-heading').on('click', ()=>{
  $('#overview-heading').addClass('selected');
  $('#photo-heading').removeClass('selected');
  $('#review-heading').removeClass('selected');
  $('#reviews').hide();
  $('#photo-container').hide();
  $('#overview').show();
});

let $overlay = $('<div id = "overlay-review"></div>');
let $reviewBox = $('<div id = "reviewBox"><h3 class = "modal-heading">Write a review</h3><img src = "/img/close.svg" class = "close"/><h4 style = "padding-left: 32px;margin-bottom: 8px">Your rating</h4><img src = "/img/star-grey.svg" class = "star" style = "margin-left: 32px" id = "star1"/><img src = "/img/star-grey.svg" class = "star" id = "star2"/><img src = "/img/star-grey.svg" class = "star" id = "star3"/><img src = "/img/star-grey.svg" class = "star" id = "star4"/><img src = "/img/star-grey.svg" class = "star" id = "star5"/><span id = "myRatingvalue">0/5</span><textarea class = "modal-content" placeholder = "Write your Review here"></textarea><button id = "modalsubmit">Submit Review <img src = "/img/arrow-right.svg" height="12px" width="12px"/></button></div>');
$($overlay).append($reviewBox);
$('body').append($overlay);

$('#review-button').on('click', ()=>{
  $('#overlay-review').show();
});

$('#modalsubmit').on('click', ()=>{
  $('#overlay-review').hide();
});

let $overlay2 = $('<div id = "overlay-report"></div>');
let $reportBox = $('<div id = "reportBox"><h3 class = "modal-heading">Report Seller</h3><img src = "/img/close.svg" class = "close"/><form style = "width: 90%; margin: 0 auto; padding-left: 16px"><label><input type="radio" name = "reportSubject"><span class = "reportValue">Wrong Category</span><br><input type="radio" name = "reportSubject"><span class = "reportValue">Offensive content</span><br><input type="radio" name = "reportSubject"><span class = "reportValue">Fraud</span><br><textarea class = "modal-content" style = "width: 95%; margin-left: 0px" placeholder = "Report Information"></textarea><button id = "modalsubmit">Submit <img src = "/img/arrow-right.svg" height="12px" width="12px"/></button></form></div>');
$($overlay2).append($reportBox);
$('body').append($overlay2);

$('#reportSeller').on('click', ()=>{
  $('#overlay-report').show();
});

$('.close').on('click', ()=>{
  score = 0;
  $('#overlay-review').hide();
  $('#overlay-report').hide();
  $('#star1').attr('src', '/img/star-grey.svg');
  $('#star2').attr('src', '/img/star-grey.svg');
  $('#star3').attr('src', '/img/star-grey.svg');
  $('#star4').attr('src', '/img/star-grey.svg');
  $('#star5').attr('src', '/img/star-grey.svg');
  $('#myRatingvalue').html("0/5");
});


$('#star1').on({'mouseenter': ()=>{
  if(score==0)
  {
  $('#star1').attr('src', '/img/star-red.svg');
  $('#myRatingvalue').html("1/5");
}
}, 'mouseleave': ()=>{
  if(score==0)
  {
  $('#star1').attr('src', '/img/star-grey.svg');
  $('#myRatingvalue').html("0/5");
}
}, 'click': ()=>{
  $('#star1').attr('src', '/img/star-red.svg');
  $('#star2').attr('src', '/img/star-grey.svg');
  $('#star3').attr('src', '/img/star-grey.svg');
  $('#star4').attr('src', '/img/star-grey.svg');
  $('#star5').attr('src', '/img/star-grey.svg');
  $('#myRatingvalue').html("1/5");
  score = 1;
}});

$('#star2').on({'mouseenter': ()=>{
  if(score==0)
  {
  $('#star1').attr('src', '/img/star-red.svg');
  $('#star2').attr('src', '/img/star-red.svg');
  $('#myRatingvalue').html("2/5");
}
}, 'mouseleave': ()=>{
  if(score==0)
  {
  $('#star1').attr('src', '/img/star-grey.svg');
  $('#star2').attr('src', '/img/star-grey.svg');
  $('#myRatingvalue').html("0/5");
}
}, 'click': ()=>{
  $('#star1').attr('src', '/img/star-red.svg');
  $('#star2').attr('src', '/img/star-red.svg');
  $('#star3').attr('src', '/img/star-grey.svg');
  $('#star4').attr('src', '/img/star-grey.svg');
  $('#star5').attr('src', '/img/star-grey.svg');
  $('#myRatingvalue').html("2/5");
  score = 2;
}});

$('#star3').on({'mouseenter': ()=>{
  if(score==0)
  {
  $('#star1').attr('src', '/img/star-red.svg');
  $('#star2').attr('src', '/img/star-red.svg');
  $('#star3').attr('src', '/img/star-red.svg');
  $('#myRatingvalue').html("3/5");
}
}, 'mouseleave': ()=>{
  if(score==0)
  {
  $('#star1').attr('src', '/img/star-grey.svg');
  $('#star2').attr('src', '/img/star-grey.svg');
  $('#star3').attr('src', '/img/star-grey.svg');
  $('#myRatingvalue').html("0/5");
}
}, 'click': ()=>{
  $('#star1').attr('src', '/img/star-red.svg');
  $('#star2').attr('src', '/img/star-red.svg');
  $('#star3').attr('src', '/img/star-red.svg');
  $('#star4').attr('src', '/img/star-grey.svg');
  $('#star5').attr('src', '/img/star-grey.svg');
  $('#myRatingvalue').html("3/5");
  score = 3;
}});

$('#star4').on({'mouseenter': ()=>{
  if(score==0)
  {
  $('#star1').attr('src', '/img/star-red.svg');
  $('#star2').attr('src', '/img/star-red.svg');
  $('#star3').attr('src', '/img/star-red.svg');
  $('#star4').attr('src', '/img/star-red.svg');
  $('#myRatingvalue').html("4/5");
}
}, 'mouseleave': ()=>{
  if(score==0)
  {
  $('#star1').attr('src', '/img/star-grey.svg');
  $('#star2').attr('src', '/img/star-grey.svg');
  $('#star3').attr('src', '/img/star-grey.svg');
  $('#star4').attr('src', '/img/star-grey.svg');
  $('#myRatingvalue').html("0/5");
}
}, 'click': ()=>{
  $('#star1').attr('src', '/img/star-red.svg');
  $('#star2').attr('src', '/img/star-red.svg');
  $('#star3').attr('src', '/img/star-red.svg');
  $('#star4').attr('src', '/img/star-red.svg');
  $('#star5').attr('src', '/img/star-grey.svg');
  $('#myRatingvalue').html("4/5");
  score = 4;
}});

$('#star5').on({'mouseenter': ()=>{
  if(score==0)
  {
  $('#star1').attr('src', '/img/star-red.svg');
  $('#star2').attr('src', '/img/star-red.svg');
  $('#star3').attr('src', '/img/star-red.svg');
  $('#star4').attr('src', '/img/star-red.svg');
  $('#star5').attr('src', '/img/star-red.svg');
  $('#myRatingvalue').html("5/5");
}
}, 'mouseleave': ()=>{
  if(score==0)
  {
  $('#star1').attr('src', '/img/star-grey.svg');
  $('#star2').attr('src', '/img/star-grey.svg');
  $('#star3').attr('src', '/img/star-grey.svg');
  $('#star4').attr('src', '/img/star-grey.svg');
  $('#star5').attr('src', '/img/star-grey.svg');
  $('#myRatingvalue').html("0/5");
}
},  'click': ()=>{
  $('#star1').attr('src', '/img/star-red.svg');
  $('#star2').attr('src', '/img/star-red.svg');
  $('#star3').attr('src', '/img/star-red.svg');
  $('#star4').attr('src', '/img/star-red.svg');
  $('#star5').attr('src', '/img/star-red.svg');
  $('#myRatingvalue').html("5/5");
  score = 5;
}});
