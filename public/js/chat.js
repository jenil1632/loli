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
    from: message.from,
    text: message.text,
    createdAt: moment(message.createdAt).format('h:mm a')
  });
  $('#messages').append(html);
});




$('form').on('submit', function(e){
  e.preventDefault();
  socket.emit('createMessage', {
    from: 'xyz',
    text: $('input').val()
  }, function(data){
    console.log(data);
  });
});
