"use strict";

const axios = require('axios');
const querystring = require('querystring');

class HttpClient {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  request (method, path, params) {
    let headers = {
      'content-type': 'application/json',
      'accept': 'application/json',
      'user-agent': 'flip-nodejs/1.0.0'
    };
    return new Promise(function (resolve, reject) {

    });
  }
}

module.exports = HttpClient;