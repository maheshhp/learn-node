let strftime = require('strftime');

let strftimeIT = strftime.localizeByIdentifier('en_US');
console.log(strftimeIT('%Y-%m-%d %k:%M'));
