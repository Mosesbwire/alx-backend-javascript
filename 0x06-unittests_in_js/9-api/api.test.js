/* eslint-disable jest/valid-expect */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable jest/prefer-expect-assertions */
const { expect } = require('chai');
const request = require('request');

describe('test index page', () => {
  it('should return statusCode 200 on success', function () {
    request('http://localhost:7865/cart/200', (error, response, body) => {
      const statusCode = 200;
      expect(statusCode).to.be.equal(response.statusCode);
    });
  });
  it('should return string as response on success', function () {
    request('http://localhost:7865/cart/200', (error, response, body) => {
      const respBody = 'Payment methods for cart 200';
      expect(respBody).to.be.equal(body);
    });
  });
  it('should return OK as response message on success', function () {
    request('http://localhost:7865/cart/200', (error, response, body) => {
      expect('OK').to.be.equal(response.statusMessage);
    });
  });
  it('should return statusCode 404 on incorrect id type', function () {
    request('http://localhost:7865/cart/abc', (error, response, body) => {
      const statusCode = 404;
      expect(statusCode).to.be.equal(response.statusCode);
    });
  });
  it('should return correct 404 message on incorrect id type', function () {
    request('http://localhost:7865/cart/abc', (error, response, body) => {
      const respBody = 'Not found';
      expect(respBody).to.be.equal(body);
    });
  });
});
