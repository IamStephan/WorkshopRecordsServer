const port = process.env.PORT || 3000

var io = require('socket.io')(port);

io.on('connection', function (socket) {
  console.log('user connected')

  socket.on('disconnect', function () {
    console.log('user disconnected')
  });
});