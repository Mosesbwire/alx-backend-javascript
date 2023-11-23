function getPaymentTokenFromApi(success) {
  if (success === true) {
    return Promise.resolve({ data: 'Successful response from the API' });
  }
  return Promise.reject();
}

module.exports = getPaymentTokenFromApi;
