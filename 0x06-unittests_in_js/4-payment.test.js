/* eslint-disable jest/valid-expect */
/* eslint-disable jest/expect-expect */
/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable import/no-extraneous-dependencies */

const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  let calculateNumber;
  const returnValue = 10;
  this.beforeEach(function () {
    calculateNumber = sinon.stub(Utils, 'calculateNumber');
    calculateNumber.returns(returnValue);
  });
  this.afterEach(function () {
    calculateNumber.restore();
  });
  it('should call calculateNumber once with given arguments', function () {
    calculateNumber.calledOnceWith('SUM', 100, 20);
  });
  it('should log correct calculated value to the console', function () {
    const spy = sinon.spy(console, 'log');
    sendPaymentRequestToApi('SUM', 100, 20);
    // eslint-disable-next-line no-unused-expressions
    expect(spy.calledWith(`The total is: ${returnValue}`)).to.be.true;
  });
});
