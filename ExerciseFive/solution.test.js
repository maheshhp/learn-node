const accessDirAsync = require('./solution');

describe('Tests for checking the log of files in a directory with format filter using callback specified', () => {
  test('Verify error codereturned to the console for no directory found', (done) => {
    let callback = (data) => {
      expect(data).toBe('ENOENT');
      done();
    };
    accessDirAsync('/Users/maheshhp/Downloads/learnyounod', 'json', callback);
  });
  test('Verify return value for directory containing the required type of file', (done) => {
    let callback = (data) => {
      expect(data).toEqual(['package-lock.json', 'package.json']);
      done();
    };
    accessDirAsync('/Users/maheshhp/Downloads/learnyounode', 'json', callback);
  });
  test('Verify return value for directory not containing the required type of file', (done) => {
    let callback = (data) => {
      expect(data).toEqual([]);
      done();
    };
    accessDirAsync('/Users/maheshhp/Downloads/learnyounode/ExerciseThree', 'json', callback);
  });
});
