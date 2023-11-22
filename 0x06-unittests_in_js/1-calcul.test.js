/* eslint-disable jest/expect-expect */
/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber with type', function () {
  it('should return 5 on addition a and b', function () {
    assert.equal(5, calculateNumber('sum', 2.4, 3.4));
  });
  it('should return 2 on subtraction a and b', function () {
    assert.equal(2, calculateNumber('subtract', 5, 3));
  });
  it('should return 2 on division a and b', function () {
    assert.equal(2, calculateNumber('divide', 6, 3));
  });
  it('should return error on division with zero', function () {
    assert.equal('Error', calculateNumber('divide', 6, 0));
  });
});
