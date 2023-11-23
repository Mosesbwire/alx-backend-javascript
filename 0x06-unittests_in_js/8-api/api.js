const express = require('express');

const app = express();

app.get('/', (req, res) => {
  console.log('called');
  res.status(200).send('Welcome to the payment system');
});
app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
