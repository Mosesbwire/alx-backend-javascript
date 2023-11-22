/* eslint-disable jest/valid-expect */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jest/expect-expect */
/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
const chai = require('chai');

// eslint-disable-next-line prefer-destructuring
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber with type', function () {
  it('should return 5 on addition a and b', function () {
    expect(5).to.equal(calculateNumber('sum', 2.4, 3.4));
  });
  it('should return 2 on subtraction a and b', function () {
    expect(2).to.equal(calculateNumber('subtract', 5, 3));
  });
  it('should return 2 on division a and b', function () {
    expect(2).to.equal(calculateNumber('divide', 6, 3));
  });
  it('should return error on division with zero', function () {
    expect('Error').to.equal(calculateNumber('divide', 6, 0));
  });
});
