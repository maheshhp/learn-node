const collect = require('./solution');

describe('Tests for juggling multiple http responses in async', () => {
  test('Should return the html data when correct url passed', (done) => {
    let runCount = 0;
    const callBack = (data) => {
      expect(data.toString().includes('html')).toBeTruthy();
      runCount += 1;
      if (runCount === 3) {
        done();
      }
    };
    collect(['http://www.example.com', 'http://www.google.com', 'http://www.hpmahesh.com'], callBack);
  });

  test('Should return error when wrong url passed', (done) => {
    const callBack = (data) => {
      console.log(data);
      expect(data.toString().includes('ENOTFOUND')).toBeTruthy();
      console.log(data);
      done();
    };
    collect(['http://gh'], callBack);
  });
});
