const http = require('http');

let accessHTTPAsync = () => {
  let getURL = process.argv[2];
  http.get(getURL, (response) => {
    response.setEncoding('UTF8');
    let retData = [];
    response.on('data', (data) => {
      retData.push(data);
      // console.log(data);
      // testCallback('DATA');
    });
    response.on('end', (end) => {
      // console.log(end);
      // testCallback('END');
      retData.forEach(data => console.log(data));
    });
    response.on('error', (error) => {
      console.log(error);
      // testCallback('ERROR');
    });
  });
};
accessHTTPAsync();
module.exports = accessHTTPAsync;
