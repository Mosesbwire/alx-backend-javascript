/* eslint-disable jest/valid-expect */
/* eslint-disable jest/expect-expect */
/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable import/no-extraneous-dependencies */

const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('test sendPaymentRequestToApi', function () {
  let calculateNumber;
  let consoleSpy;
  this.beforeEach(function () {
    calculateNumber = sinon.stub(Utils, 'calculateNumber');
    consoleSpy = sinon.spy(console, 'log');
  });
  this.afterEach(function () {
    calculateNumber.restore();
    consoleSpy.restore();
  });
  it('should log correct string to the console with value of 120', function () {
    calculateNumber.returns(120);
    sendPaymentRequestToApi('sum', 100, 20);
    // eslint-disable-next-line no-unused-expressions
    expect(consoleSpy.calledOnce).to.be.true;
    // eslint-disable-next-line no-unused-expressions
    expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
  });
  it('should log correct string to console with value of 20', function () {
    calculateNumber.returns(20);
    sendPaymentRequestToApi('sum', 10, 10);
    // eslint-disable-next-line no-unused-expressions
    expect(consoleSpy.calledOnce).to.be.true;
    // eslint-disable-next-line no-unused-expressions
    expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
  });
});
