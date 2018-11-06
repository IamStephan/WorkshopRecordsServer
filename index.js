const port = process.env.PORT || 3000
const app = require('http').createServer(handler)
const io = require('socket.io')(app);
const fs = require('fs');

app.listen(port);

function handler (req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World</h1>');
}

io.on('connection', function (socket) {
  console.log('user connected')

  socket.on('disconnect', function () {
    console.log('user disconnected')
  });
});