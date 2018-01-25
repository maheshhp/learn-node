const accessHTTPAsync = require('./solution');

describe('Tests for checking the logging of data received from HTTP Get request', () => {
  test('Verify data returned for successful HTTP request', (done) => {
    let callback = (data) => {
      expect(data).toMatch('DATA');
      done();
    };
    accessHTTPAsync('http://jsonplaceholder.typicode.com', callback);
  });
  test('Verify data returned for failed HTTP request', (done) => {
    let callback = (data) => {
      expect(data).toMatch('ERROR');
      done();
    };
    accessHTTPAsync('http://httpstat.us/404', callback);
  });
  test('Verify data returned for HTTP request end', (done) => {
    let callback = (error, data) => {
      expect(data).toMatch('END');
      done();
    };
    accessHTTPAsync('http://jsonplaceholder.typicode.com', callback);
  });
});
