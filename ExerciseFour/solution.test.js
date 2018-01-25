const accessFileAsync = require('./solution');

describe('Tests for checking the log of newline characters by the function that reads the contents of the file using callback specified in the command line argument', () => {
  test('Verify error code written to the console for no file found', () => {
    accessFileAsync('/Users/maheshhp/Downloads/learnyounode/ExerciseThree/testMe.txt');
    expect(accessFileAsync('/Users/maheshhp/Downloads/learnyounode/ExerciseThree/testMe.txt')).toMatch('ENOENT');
  });
  test('Verify log for file with no newline characters', () => {
    accessFileAsync('/Users/maheshhp/Downloads/learnyounode/ExerciseThree/test.txt');
    expect(accessFileAsync('/Users/maheshhp/Downloads/learnyounode/ExerciseThree/test.txt')).toMatch('0');
  });
  test('Verify log for file with 5 newline characters', () => {
    expect(accessFileAsync('/Users/maheshhp/Downloads/learnyounode/ExerciseThree/testFive.txt')).toMatch('5');
  });
});
