const addCLArgs = require('./solution');

global.console = {
  warn: jest.fn(),
  log: jest.fn(),
};

describe('Tests for checking the console log by the function that adds everything in the arguments', () => {
  test('Verify log value for no arguments', () => {
    addCLArgs();
    expect(global.console.log).toHaveBeenCalledWith(undefined);
  });
  test('Verify log value for strings', () => {
    addCLArgs('Hello', 'World');
    expect(global.console.log).toHaveBeenCalledWith('HelloWorld');
  });
  test('Verify log value for numbers', () => {
    addCLArgs(1, 2, 3, 4, 5);
    expect(global.console.log).toHaveBeenCalledWith(15);
  });
});
