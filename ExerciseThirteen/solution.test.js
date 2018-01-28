const exported = require('./solution');

const { startNodeServer } = exported;
const { stopHTTPServer } = exported;
const { parseIsoTime } = exported;
const http = require('http');

describe('Tests for checking the time parse helper function', () => {
  test('Verify the parsed data received for iso time return type', (done) => {
    let stdIsoData = {
      hour: 14,
      minute: 23,
      second: 15,
    };
    expect(parseIsoTime('2013-08-10T12:10:15.474Z', 'Iso')).toEqual(stdIsoData);
    done();
  });
  test('Verify the parsed data received for unix time return type', (done) => {
    let stdUnixData = {
      unixtime: 1376136615474,
    };
    expect(parseIsoTime('2013-08-10T12:10:15.474Z', 'Unix')).toEqual(stdUnixData);
    done();
  });
});

describe('Tests for checking the response data received from the HTTP server for ISO request', () => {
  startNodeServer(8000);
  test('Verify the HTML data received from the HTTP server on valid request', (done) => {
    let retData = {};
    let stdIsoData = {
      hour: 14,
      minute: 23,
      second: 15,
    };
    http.get('http://127.0.0.1:8000/api/parsetime?iso=2013-08-10T12:10:15.474Z', (response) => {
      response.setEncoding('UTF8');
      response.on('data', (data) => {
        retData = data;
      });
      response.on('end', (end) => {
        expect(retData).toEqual(stdIsoData);
        done();
      });
    });
  });
  test('Verify the HTML data received from the HTTP server on invalid request data', (done) => {
    let retData = {};
    http.get('http://127.0.0.1:8000/api/parsetime?iso=2013-15-10T12:70:15.474Z', (response) => {
      response.setEncoding('UTF8');
      response.on('data', (data) => {
        retData = data;
      });
      response.on('end', (end) => {
        expect(retData).toMatch('Invalid input date-time value');
        done();
      });
    });
  });
  test('Verify the HTML data received from the HTTP server on invalid request URL format', (done) => {
    let retData = {};
    http.get('http://127.0.0.1:8000/api/parsetme?iso=2013-10-10T12:30:15.474Z', (response) => {
      response.setEncoding('UTF8');
      response.on('data', (data) => {
        retData = data;
      });
      response.on('end', (end) => {
        expect(retData).toMatch('Invalid request format');
        done();
      });
    });
  });
});

describe('Tests for checking the response data received from the HTTP server for UNIX format request', () => {
  startNodeServer(8000);
  test('Verify the HTML data received from the HTTP server on valid request', (done) => {
    let retData = {};
    let stdUnixData = {
      unixtime: 1376136615474,
    };
    http.get('http://127.0.0.1:8000/api/unixtime?iso=2013-08-10T12:10:15.474Z', (response) => {
      response.setEncoding('UTF8');
      response.on('data', (data) => {
        retData = data;
      });
      response.on('end', (end) => {
        expect(retData).toEqual(stdUnixData);
        done();
      });
    });
  });
  test('Verify the HTML data received from the HTTP server on invalid request data', (done) => {
    let retData = {};
    http.get('http://127.0.0.1:8000/api/unixtime?iso=2013-15-10T12:70:15.474Z', (response) => {
      response.setEncoding('UTF8');
      response.on('data', (data) => {
        retData = data;
      });
      response.on('end', (end) => {
        expect(retData).toMatch('Invalid input date-time value');
        done();
      });
    });
  });
  test('Verify the HTML data received from the HTTP server on invalid request URL format', (done) => {
    let retData = {};
    http.get('http://127.0.0.1:8000/api/unixtme?iso=2013-10-10T12:30:15.474Z', (response) => {
      response.setEncoding('UTF8');
      response.on('data', (data) => {
        retData = data;
      });
      response.on('end', (end) => {
        expect(retData).toMatch('Invalid request format');
        stopHTTPServer();
        done();
      });
    });
  });
});
