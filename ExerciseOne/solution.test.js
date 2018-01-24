const printToConsole = require('./solution');

global.console = {
  warn: jest.fn(),
  log: jest.fn(),
};

describe('Tests for checking the value logged to the console', () => {
  test('Verify nothing is printed to the console', () => {
    printToConsole();
    expect(global.console.log).toHaveBeenCalledWith(undefined);
  });
  test('Verify HELLO WORLD is printed to the console', () => {
    printToConsole('HELLO WORLD');
    expect(global.console.log).toHaveBeenCalledWith('HELLO WORLD');
  });
});
