let net = require('net');
let strftime = require('strftime');

let startDateTimeServer = (port) => {
  // let port = process.argv[2];
  let server = net.createServer((socket) => {
    let strftimeIT = strftime.localizeByIdentifier('en_US');
    socket.end(`${strftimeIT('%Y-%m-%d %H:%M')}\n`);
    // server.close();
  });
  server.listen(port);
};
// startDateTimeServer();
module.exports = startDateTimeServer;
