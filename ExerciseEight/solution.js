const http = require('http');

let accessHTTPAsyncCollect = (getURL, testCallback) => {
  // let getURL = process.argv[2];
  http.get(getURL, (response) => {
    response.setEncoding('UTF8');
    let retData = '';
    response.on('data', (data) => {
      retData += data.toString();
    });
    response.on('end', (end) => {
      console.log(retData.length);
      console.log(retData);
      testCallback(null, 'SUCCESS');
    });
    response.on('error', (error) => {
      console.log(error);
      testCallback(null, '404 Not Found');
    });
  });
};
// accessHTTPAsyncCollect();
module.exports = accessHTTPAsyncCollect;
