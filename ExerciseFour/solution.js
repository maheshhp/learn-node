const fs = require('fs');

let accessFileAsync = (filepath, testCallback) => {
  fs.readFile(filepath, 'utf8', (error, fileContent) => {
    if (error) {
      return testCallback(error.code);
    }
    return testCallback(fileContent.split('\n').length - 1);
  });
};

module.exports = accessFileAsync;
