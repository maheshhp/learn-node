const getFilesAsync = require('./solution');

let logToConsole = (dirPath, extension, testCallback) => {
  // let dirPath = process.argv[2];
  // let extension = process.argv[3];
  getFilesAsync(dirPath, extension, (err, data) => {
    if (err) {
      console.log(err.code);
      testCallback(err);
    } else {
      // data.forEach(element => console.log(element));
      console.log(data.toString());
      testCallback(null, data);
    }
  });
};
// logToConsole();
module.exports = logToConsole;
