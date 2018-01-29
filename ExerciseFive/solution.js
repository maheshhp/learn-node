const fs = require('fs');
const path = require('path');

let accessDirAsync = (dirPath, fileType, testCallback) => {
  // let dirPath = process.argv[2];
  // let fileType = process.argv[3];
  fs.readdir(dirPath, 'utf8', (error, fileList) => {
    if (error) {
      return testCallback(error.code);
    }
    let retrievedFiles = fileList
      .filter(filename => path.extname(filename) === `.${fileType}`);
    return testCallback(retrievedFiles);
  });
};
// accessDirAsync();
module.exports = accessDirAsync;
