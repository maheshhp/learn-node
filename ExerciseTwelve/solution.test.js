const getPOSTArgs = require('./solution').startNodeServer;
const stopResponseServer = require('./solution').stopHTTPServer;
const request = require('request');

let requestHeader = {
  'User-Agent': 'Super Agent/0.0.1',
  'Content-Type': 'application/x-www-form-urlencoded',
};

let requestOptions = {
  url: 'http://127.0.0.1:8000',
  method: 'POST',
  headers: requestHeader,
  form: 'HelloWorld',
};

let invalidRequestOptions = {
  url: 'http://127.0.0.1:9000',
  method: 'POST',
  headers: requestHeader,
  form: '1234',
};

describe('Tests for valid and invalid string in request body', () => {
  test('Verify the HTML data received from the HTTP server on request', (done) => {
    let retData = '';
    getPOSTArgs(8000);
    request(requestOptions, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        retData += body;
        expect(retData).toMatch('HELLOWORLD');
      } else {
        expect(retData).toMatch('ERROR');
      }
      stopResponseServer(8000);
      done();
    });
  });
  test('Verify the HTML data received from the HTTP server on request', (done) => {
    let retData = '';
    getPOSTArgs(9000);
    request(invalidRequestOptions, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        retData += body;
        expect(retData).toMatch('1234');
      } else {
        expect(retData).toMatch('ERROR');
      }
      stopResponseServer(9000);
      done();
    });
  });
});
