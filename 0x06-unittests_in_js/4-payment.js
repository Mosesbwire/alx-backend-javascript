const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const total = Utils.calculateNumber(totalAmount, totalShipping);
  console.log(`The total is: ${total}`);
}
module.exports = sendPaymentRequestToApi;
