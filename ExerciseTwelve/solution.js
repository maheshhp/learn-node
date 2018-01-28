const http = require('http');
const through2Map = require('through2-map');
const httpShutdown = require('http-shutdown'); // Required to gracefully shutdown the server after the first response

let toUpperMapper = through2Map(reqBody => reqBody.toString().toUpperCase());
let serverObject = [];

// Server shut down helper function
// Arguments: Server object
// Returns: null
// Output: Prints status to console
let stopHTTPServer = (stopPort) => {
  serverObject[stopPort].shutdown(() => {
    console.log('Everything is cleanly shutdown.');
  });
};

let startNodeServer = (port) => {
  let server = http.createServer((request, response) => {
    if (request.method === 'POST') {
      // Process body and pipe it to response
      console.log(serverObject[port]);
      request.pipe(toUpperMapper).pipe(response);
    }
  });
  server = (httpShutdown)(server);
  serverObject[port] = server;
  server.listen(port);
};

// startNodeServer(process.argv[2]);
module.exports = { startNodeServer, stopHTTPServer };
