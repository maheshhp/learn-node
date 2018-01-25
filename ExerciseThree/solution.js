const fs = require('fs');

let accessFile = () => {
  let fileContentNewLines = fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1;
  console.log(fileContentNewLines);
};

accessFile();
module.exports = accessFile;
