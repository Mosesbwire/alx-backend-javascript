/* eslint-disable jest/expect-expect */
/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable import/no-extraneous-dependencies */

const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

// eslint-disable-next-line prefer-destructuring

describe('sendPaymentRequestToApi', function () {
  it('should call calculateNumber once with given arguments', function () {
    const calculateNumber = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi('SUM', 100, 20);
    calculateNumber.restore();
    calculateNumber.calledOnceWith('SUM', 100, 20);
  });
});
