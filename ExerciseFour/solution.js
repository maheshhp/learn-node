const fs = require('fs');

let accessFileAsync = (arg) => {
  fs.readFile(arg, 'utf8', (error, fileContent) => {
    if (error) {
      console.log(error.code);
    } else {
      console.log(fileContent.split('\n').length - 1);
    }
  });
};

module.exports = accessFileAsync;
