const fs = require('fs');

let accessFile = (arg) => {
  let fileContentNewLines = fs.readFileSync(arg, 'utf8').split('\n').length;
  console.log(fileContentNewLines);
};
module.exports = accessFile;
