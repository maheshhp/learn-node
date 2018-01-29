const fs = require('fs');
const path = require('path');

let accessDirAsync = (dirPath, fileType, printCallback) => {
  fs.readdir(dirPath, 'utf8', (error, fileList) => {
    if (error) {
      return printCallback(error);
    }
    let retrievedFiles = fileList
      .filter(filename => path.extname(filename) === `.${fileType}`);
    return printCallback(null, retrievedFiles);
  });
};

module.exports = accessDirAsync;
