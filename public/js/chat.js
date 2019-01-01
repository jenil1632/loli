var socket = io();
socket.on('connect', function(){
  console.log('conneted to server');
});
socket.on('disconnect', function(){
  console.log('disconneced from server');
});

socket.on('newMessage', function(message){
  let template = $('#message-template').html();
  let html = Mustache.render(template, {
    text: message.text,
    createdAt: moment(message.createdAt).format('h:mm a')
  });
  $('#message-list').append(html);
  scrollToBottom();
});




$('form').on('submit', function(e){
  e.preventDefault();
  let message_value = $('textarea').val().trim();
  if(message_value=='')
  return ;
  socket.emit('createMessage', {
    from: 'User',
    text: message_value
  }, function(data){
    $('textarea').val('');
    let template = $('#message-template-1').html();
    let html = Mustache.render(template, {
      text: message_value,
      createdAt: moment(data.createdAt).format('h:mm a')
    });
    $('#message-list').append(html);
    scrollToBottom();
  });
});

function scrollToBottom () {
  // Selectors
  var messages = jQuery('#message-list');
  var conversation = jQuery('#conversation');
  var newMessage = messages.children('li:last-child')
  // Heights
  var clientHeight = conversation.prop('clientHeight');
  var scrollTop = conversation.prop('scrollTop');
  var scrollHeight = messages.prop('scrollHeight');
  var newMessageHeight = newMessage.innerHeight();
  var lastMessageHeight = newMessage.prev().innerHeight();

  if (clientHeight + scrollTop + newMessageHeight + lastMessageHeight >= scrollHeight) {
    conversation.scrollTop(scrollHeight);
  }
}
