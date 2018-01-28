const http = require('http');
const httpShutdown = require('http-shutdown'); // Required to gracefully shutdown the server after the first response

let serverObject = null;

// Server shut down helper function
// Arguments: Server object
// Returns: null
// Output: Prints status to console
let stopHTTPServer = () => {
  serverObject.shutdown(() => {
    console.log('Everything is cleanly shutdown.');
  });
};

// Time parser helper function
// Arguments: dateTimeValue string, Iso/Unix format specifier
// Returns: json with parsed values
let parseIsoTime = (dateTimeValue, format) => {
// Returns JSON based on format or error string
};

let startNodeServer = (port) => {
  let server = http.createServer((request, response) => {

  });
  server = (httpShutdown)(server);
  serverObject = server;
  server.listen(port);
};

// startNodeServer(process.argv[2]);
module.exports = { startNodeServer, stopHTTPServer, parseIsoTime };
