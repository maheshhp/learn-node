const setupHTTPServer = require('./solution');
const http = require('http');
const fs = require('fs');

describe('Tests for checking the HTML data received from the HTTP server', () => {
  test('Verify the HTML data received from the HTTP server on request', (done) => {
    let retData = '';
    let filePath = '/Users/maheshhp/Downloads/learnyounode/ExerciseEleven/index.html';
    let fileData = fs.readFileSync(filePath, 'UTF8');
    setupHTTPServer(8000, filePath);
    http.get('http://127.0.0.1:8000', (response) => {
      response.setEncoding('UTF8');
      response.on('data', (data) => {
        retData += data.toString();
      });
      response.on('end', (end) => {
        expect(retData).toMatch(fileData);
        done();
      });
    });
  });
});
