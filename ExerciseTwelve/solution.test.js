const getPOSTArgs = require('./solution');
const request = require('request');

let requestHeader = {
  'User-Agent': 'Super Agent/0.0.1',
  'Content-Type': 'application/x-www-form-urlencoded',
};

let requestOptions = {
  url: 'http://127.0.0.1:8000',
  method: 'POST',
  headers: requestHeader,
  form: { body: 'Hello World' },
};

describe('Tests for valid request body string', () => {
  test('Verify the HTML data received from the HTTP server on request', (done) => {
    let retData = '';
    getPOSTArgs(8000);
    request(requestOptions, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        retData += body;
        console.log(body);
        expect(retData).toMatch('');
      } else {
        expect(retData).toMatch('ERROR');
      }
      done();
    });
  });
});
