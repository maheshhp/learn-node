const http = require('http');

let accessHTTPAsync = (getURL, testCallback) => {
  http.get(getURL, (response) => {
    response.on('data', (data) => {
      // console.log(data);
      testCallback('DATA');
    });
    response.on('error', (error) => {
      // console.log(error);
      testCallback('ERROR');
    });
    response.on('end', (end) => {
      // console.log(end);
      testCallback('END');
    });
  });
};

module.exports = accessHTTPAsync;
