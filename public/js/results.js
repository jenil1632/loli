let view = "grid";

$(window).resize(function() {
  if($(window).width()>=624 && view=='list')
  {
    toList();
  }
  else if($(window).width()<624 && view=='list')
  {
     toGrid();
  }
});

if($(window).width()<624)
{
  view = 'grid';
  toGrid();
}

function toList()
{
  $('#results').children().addClass('list-view');
  $('#results').children().removeClass('grid-view');
  $('.image-container').addClass('list-image-container');
  $('.side-info').addClass('list-side-info');
  $('.info').addClass('list-info');
  $('.badgename').show();
  $('.badge').hide();
  $('.call').css({"margin-right": "0", "margin-top": "5px", "margin-bottom": "5px"});
  $('.info h4').css('font-size', '19px');
  $('.product-heading').css('font-size', '16px');
  $('.distance').css({'font-size': '16px', 'margin-top': 'auto'});
  $('.rating-value').css('font-size', '20px');
  $('.rating-container').css('margin', 'auto 0 0 0');
  $('.dummy').show();
}

$('#list-toggle').on('click', function(){
  if(view=='grid')
  {
    view = 'list';
    $('#list-toggle').addClass('selected');
    $('#grid-toggle').removeClass('selected');
    toList();
  }
});

$('#grid-toggle').on('click', function(){
  if(view=='list')
  {
    $('#list-toggle').removeClass('selected');
    $('#grid-toggle').addClass('selected');
    view = 'grid';
    toGrid();
  }
});

function toGrid()
{
  $('#results').children().addClass('grid-view');
  $('#results').children().removeClass('list-view');
  $('.image-container').removeClass('list-image-container');
  $('.side-info').removeClass('list-side-info');
  $('.info').removeClass('list-info');
  $('.badgename').hide();
  $('.badge').show();
  $('.call').css({"margin-right": "8px", "margin-top": "0", "margin-bottom": "0"});
  $('.info h4').css('font-size', '16px');
  $('.product-heading').css('font-size', '14px');
  $('.distance').css({'font-size': '14px', 'margin': '0'});
  $('.rating-value').css('font-size', '18px');
  $('.rating-container').css('margin', '0 0 0 auto');
  $('.dummy').hide();
}
