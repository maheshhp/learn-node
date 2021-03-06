const accessFile = require('./solution');

global.console = {
  warn: jest.fn(),
  log: jest.fn(),
};

describe('Tests for checking the log of newline characters by the function that reads the contents of the file specified in the command line argument', () => {
  test('Verify error thrown for no file found', () => {
    expect(() => accessFile('/Documents/newTest.txt')).toThrowError('ENOENT: no such file or directory, open \'/Documents/newTest.txt\'');
  });
  test('Verify log for file with no newline characters', () => {
    accessFile('/Users/maheshhp/Downloads/learnyounode/ExerciseThree/test.txt');
    expect(global.console.log).toHaveBeenCalledWith(0);
  });
  test('Verify log for file with 5 newline characters', () => {
    accessFile('/Users/maheshhp/Downloads/learnyounode/ExerciseThree/testFive.txt');
    expect(global.console.log).toHaveBeenCalledWith(5);
  });
});
