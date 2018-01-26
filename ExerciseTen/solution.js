let net = require('net');
let strftime = require('strftime');

let startDateTimeServer = (port) => {
  let server = net.createServer((socket) => {
    let strftimeIT = strftime.localizeByIdentifier('en_US');
    socket.write(`${strftimeIT('%Y-%m-%d %k:%M')}\n`);
    server.close();
  });
  server.listen(port);
};

module.exports = startDateTimeServer;
