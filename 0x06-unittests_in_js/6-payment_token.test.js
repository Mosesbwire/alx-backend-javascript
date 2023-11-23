/* eslint-disable jest/valid-expect */
/* eslint-disable jest/no-test-callback */
/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
const { expect, assert } = require('chai');
const getPaymentTokenFromApi = require('./6-payment_token');

describe('getPaymentTokenFromApi', function () {
  it('should return object with string on success', function (done) {
    getPaymentTokenFromApi(true).then((data) => {
      expect('Successful response from the API').to.be.equal(data.data);
      done();
    });
  });
  // eslint-disable-next-line jest/expect-expect
  it('should return {data: Successful response from the API}', function (done) {
    const obj = { data: 'Successful response from the API' };
    getPaymentTokenFromApi(true).then((data) => {
      assert.deepEqual(obj, data);
      done();
    });
  });
});
