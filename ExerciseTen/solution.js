let net = require('net');
let strftime = require('strftime');

let startDateTimeServer = (port) => {
  let server = net.createServer((socket) => {

  });
  server.listen(port);
};

module.exports = startDateTimeServer;
