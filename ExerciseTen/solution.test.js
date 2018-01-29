const getServerTime = require('./solution');
let net = require('net');
let strftime = require('strftime');


describe('Tests for checking the date and time data received from the TCP server', () => {
  test('Verify value and format of date-time returned for dateTime request', (done) => {
    let client = new net.Socket();
    let timeData = '';
    getServerTime(8000);
    client.connect(8000, '127.0.0.1', () => {
      console.log('Connected to server');
    });

    client.on('data', (data) => {
      timeData += data;
      client.destroy();
    });

    client.on('close', () => {
      console.log('Connection closed');
      let strftimeIT = strftime.localizeByIdentifier('en_US');
      expect(timeData).toMatch(strftimeIT('%Y-%m-%d %H:%M').toString());
      console.log(timeData);
      done();
    });
  });
});
