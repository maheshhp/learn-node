const http = require('http');
const fs = require('fs');
const httpShutdown = require('http-shutdown'); // Required to gracefully shutdown the server after the first response

let stopHTTPServer = (serverObject) => {
  serverObject.shutdown(() => {
    console.log('Everything is cleanly shutdown.');
  });
};

let setupHTTPServer = (port, filePath) => {
  let server = http.createServer((request, response) => {
    let fileReadStream = fs.createReadStream(filePath);
    fileReadStream.pipe(response);
    fileReadStream.on('close', () => {
      response.end();
      stopHTTPServer(server);
    });
  });
  server = (httpShutdown)(server);
  server.listen(port);
};
// setupHTTPServer(8000, '');
module.exports = setupHTTPServer;
