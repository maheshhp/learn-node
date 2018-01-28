let net = require('net');
let strftime = require('strftime');

let startDateTimeServer = () => {
  let port = process.argv[2];
  let server = net.createServer((socket) => {
    let strftimeIT = strftime.localizeByIdentifier('en_US');
    socket.end(`${strftimeIT('%Y-%m-%d %k:%M')}\n`);
    // server.close();
  });
  server.listen(port);
};
startDateTimeServer();
module.exports = startDateTimeServer;
