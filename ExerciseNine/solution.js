const bl = require('bl');
const http = require('http');

const printToConsole = (resultArr, call) => {
  resultArr.forEach(x => call(x));
};

const collectResponse = (urlArray, callback) => {
  let result = [];
  let count = 0;
  urlArray.forEach(url =>
    http.get(url, (response) => {
      response.pipe(bl((err, data) => {
        if (err) {
          callback(err.code);
        }
        result[count] = data.toString();
        count += 1;
        if (count === 3) {
          printToConsole(result, callback);
        }
      }));
    }));
};

// module.exports = collectResponse;
collectResponse(process.argv.slice(2), console.log);
