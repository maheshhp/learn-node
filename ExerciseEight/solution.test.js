const accessHTTPAsyncCollect = require('./solution');

describe('Tests for checking the logging of data received from HTTP Get request', () => {
  test('Verify data returned for successful HTTP request end', (done) => {
    let callback = (error, data) => {
      expect(data).toMatch('SUCCESS');
      done();
    };
    accessHTTPAsyncCollect('http://jsonplaceholder.typicode.com/posts/1', callback);
  });

  test('Verify data returned for failed HTTP request', (done) => {
    let callback = (error, data) => {
      expect(data).toMatch('404 Not Found');
      done();
    };
    accessHTTPAsyncCollect('http://httpstat.us/404', callback);
  });
});
