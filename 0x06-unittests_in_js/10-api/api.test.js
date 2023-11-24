/* eslint-disable jest/valid-expect */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable jest/prefer-expect-assertions */
const { expect, assert } = require('chai');
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

describe('available-payments', function () {
  it('should return statusCode 200 on success', function () {
    request('http://localhost:7865/available_payments', (error, response, body) => {
      const statusCode = 200;
      expect(statusCode).to.be.equal(response.statusCode);
    });
  });
  // eslint-disable-next-line jest/expect-expect
  it('should return object on success', function () {
    request('http://localhost:7865/available_payments', (error, response, body) => {
      const objResp = {
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      };
      assert.deepEqual(objResp, JSON.parse(body));
    });
  });
});

describe('login', function () {
  it('should return statusCode 200 on success', function () {
    request({
      method: 'POST',
      uri: 'http://localhost:7865/login',
      body: JSON.stringify({ userName: 'Moses' }),
    }, (err, resp, body) => {
      const statusCode = 200;
      expect(statusCode).to.be.equal(resp.statusCode);
    });
  });
  it('should return correct string response on success', function () {
    const userName = 'User';
    request.post({ url: 'http://localhost:7865/login', form: { userName } }, (err, resp, body) => {
      const respBody = `Welcome ${userName}`;
      expect(respBody).to.be.equal(body);
    });
  });
});
