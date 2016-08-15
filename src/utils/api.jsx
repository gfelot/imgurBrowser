const Fetch = require('whatwg-fetch');
const rootUrl = 'https://api.imgur.com/3/';
const apiKey = '15c39c6418acfe2';

module.exports = window.api = {
  get: function (url) {
    return fetch(rootUrl + url, {
      headers: {
        'Authorization': 'Client-ID ' + apiKey
      }
    })
    .then(function (response) {
      return response.json()
    })
  }
};
