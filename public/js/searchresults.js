let currentFocus = 0;
let len = 0;
$('#searchbar').on('input', function(){
  let svalue = $(this).val().trim();
  if(svalue=='')
  {
    cleardiv();
  }
  if(svalue!='')
  {
    $.get('categories.js',{svalue: svalue}, function(result){
      len = result.length;
      cleardiv();
      if(len>0)
      {
        result.sort(function(a, b){
          return a.priority - b.priority;
        });
      }
      if(len>6)
      len = 6;
      let $wrapper = $('<div id = "wrapper"></div>');
      for(let i=0;i<len;i++)
      {
          let $newdiv = $(`<div class = "autocomplete-items">${result[i]['value']} in <span style='color: #d63322'>${result[i]['sub1']}</span></div>`);
          $wrapper.append($newdiv);
      }
      $('#searchbar').after($wrapper);

      $('.autocomplete-items').on('click', function(){
        $('#searchbar').val($(this).text());
        cleardiv();
        $('#searchbar').trigger('submit');
      });

$(document).on('click', cleardiv);
    });
  }
});

function cleardiv(){
  $('#wrapper').remove();
  currentFocus = 0;
}

$('#searchbar').on('keydown', function(e){
  if(e.keyCode==40&&currentFocus<len)
  {console.log(len);
    currentFocus++;
    //removeactive
    $('#wrapper>div.selected').removeClass('selected');
    //addactive
    $(`div.autocomplete-items:nth-child(${currentFocus})`).addClass('selected');
  }
  else if(e.keyCode==38&&currentFocus>0)
  {
    currentFocus--;
    //removeactive
    $('#wrapper>div.selected').removeClass('selected');
    //addactive
    $(`div.autocomplete-items:nth-child(${currentFocus})`).addClass('selected');
  }
  else if(e.keyCode==13)
  {
    e.preventDefault();
    //simulate click
    $('#searchbar').val($('div.selected').text());
    cleardiv();
    $('#searchbar').trigger('submit');
  }
});
