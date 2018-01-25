const accessFileAsync = require('./solution');

describe('Tests for checking the log of newline characters by the function that reads the contents of the file using callback specified', () => {
  test('Verify error code written to the console for no file found', (done) => {
    let callback = (data) => {
      expect(data).toBe('ENOENT');
      done();
    };
    accessFileAsync('/Users/maheshhp/Downloads/learnyounode/ExerciseThree/testMe.txt', callback);
  });
  test('Verify return value for file with no newline characters', (done) => {
    let callback = (data) => {
      expect(data).toBe(0);
      done();
    };
    accessFileAsync('/Users/maheshhp/Downloads/learnyounode/ExerciseThree/test.txt', callback);
  });
  test('Verify return value for file with 5 newline characters', (done) => {
    let callback = (data) => {
      expect(data).toBe(5);
      done();
    };
    accessFileAsync('/Users/maheshhp/Downloads/learnyounode/ExerciseThree/testFive.txt', callback);
  });
});
