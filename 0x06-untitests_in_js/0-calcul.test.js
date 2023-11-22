/* eslint-disable jest/expect-expect */
/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('should return 7 a and b will be rounded up', function () {
    assert.equal(7, calculateNumber(2.5, 3.5));
  });
  it('should return 5 a and b will be rounded down', function () {
    assert.equal(5, calculateNumber(2.4, 3.4));
  });
});
