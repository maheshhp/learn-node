const accessHTTPAsyncCollect = require('./solution');

describe('Tests for checking the logging of data received from HTTP Get request', () => {
  test('Verify data returned for failed HTTP request', (done) => {
    let callback = (data) => {
      expect(data).toMatch('ERROR');
      done();
    };
    accessHTTPAsyncCollect('http://httpstat.us/404', callback);
  });
  test('Verify data returned for successful HTTP request end', (done) => {
    let callback = (error, data) => {
      expect(data).toMatch('{"userId": 1,"id": 1,"title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit","body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"}');
      done();
    };
    accessHTTPAsyncCollect('http://jsonplaceholder.typicode.com', callback);
  });
});
