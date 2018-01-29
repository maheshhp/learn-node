const http = require('http');
const httpShutdown = require('http-shutdown'); // Required to gracefully shutdown the server after the first response
const url = require('url');

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
  let parsedDateTime = {};
  if (format === 'Iso') {
    parsedDateTime = new Date(dateTimeValue);
    return {
      hour: parsedDateTime.getHours(),
      minute: parsedDateTime.getMinutes(),
      second: parsedDateTime.getSeconds(),
    };
  } else if (format === 'Unix') {
    parsedDateTime = new Date(dateTimeValue);
    return {
      unixtime: parsedDateTime.getTime(),
    };
  }
  return 'Invalid format specified';
};

let startNodeServer = (port) => {
  let server = http.createServer((request, response) => {
    let parsedURL = url.parse(request.url, true);
    let timeString = parsedURL.query.iso;
    let parsedTime = 'Invalid request format';
    if (parsedURL.pathname === '/api/parsetime') {
      parsedTime = parseIsoTime(timeString, 'Iso');
      if (isNaN(parsedTime.hour)) {
        parsedTime = 'Invalid input date-time value';
      } else {
        parsedTime = JSON.stringify(parsedTime);
      }
    } else if (parsedURL.pathname === '/api/unixtime') {
      parsedTime = parseIsoTime(timeString, 'Unix');
      if (isNaN(parsedTime.unixtime)) {
        parsedTime = 'Invalid input date-time value';
      } else {
        parsedTime = JSON.stringify(parsedTime);
      }
    }
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(parsedTime);
  });
  server = (httpShutdown)(server);
  serverObject = server;
  server.listen(port);
};

startNodeServer(process.argv[2]);
module.exports = { startNodeServer, stopHTTPServer, parseIsoTime };
