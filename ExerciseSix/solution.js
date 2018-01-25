const fs = require('fs');

let accessDirAsync = (dirPath, fileType, printCallback) => {
  fs.readdir(dirPath, 'utf8', (error, fileList) => {
    if (error) {
      return printCallback(error);
    }
    let retrievedFiles = fileList
      .filter(filename => filename.includes(`.${fileType}`));
    return printCallback(null, retrievedFiles);
  });
};

module.exports = accessDirAsync;
