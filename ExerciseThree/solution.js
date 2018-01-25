const fs = require('fs');

let accessFile = (arg) => {
  let fileContentNewLines = fs.readFileSync(arg, 'utf8').split('\n').length - 1;
  console.log(fileContentNewLines);
};

// accessFile();
module.exports = accessFile;
