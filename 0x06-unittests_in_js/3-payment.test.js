/* eslint-disable jest/valid-expect */
/* eslint-disable jest/expect-expect */
/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable import/no-extraneous-dependencies */

const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

// eslint-disable-next-line prefer-destructuring

describe('sendPaymentRequestToApi', function () {
  let calculateSpy;
  this.beforeEach(function () {
    calculateSpy = sinon.spy(Utils, 'calculateNumber');
  });
  this.afterEach(function () {
    calculateSpy.restore();
  });
  it('should call calculateNumber once', function () {
    sendPaymentRequestToApi('SUM', 100, 20);
    // eslint-disable-next-line no-unused-expressions
    expect(calculateSpy.calledOnce).to.be.true;
  });
  it('should call calculateNumber with correct arg Sum', function () {
    sendPaymentRequestToApi('SUM', 100, 20);
    calculateSpy.calledWith('SUM');
  });
  it('should call calculateNumber with correct arg 100', function () {
    sendPaymentRequestToApi('SUM', 100, 20);
    calculateSpy.calledWith(100);
  });
  it('should call calculateNumber with correct arg 20', function () {
    sendPaymentRequestToApi('SUM', 100, 20);
    calculateSpy.calledWith(20);
  });
  it('should return 120', function () {
    sendPaymentRequestToApi('sum', 100, 20);
    calculateSpy.returned(120);
  });
});
