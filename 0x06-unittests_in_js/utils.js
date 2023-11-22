function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return b === 0 ? 'Error' : a / b;
}
const operation = {
  SUM: add,
  SUBTRACT: subtract,
  DIVIDE: divide,
};

const Utils = {
  calculateNumber: function calculateNumber(type, a, b) {
    const arithmetic = operation[type.toUpperCase()];
    return arithmetic(Math.round(a), Math.round(b));
  },
};

module.exports = Utils;
