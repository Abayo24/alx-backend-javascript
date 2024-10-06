const request = require('request');
const { expect } = require('chai');
const app = require('./api');

describe('Index page', () => {
  // Start server before tests
  before((done) => {
    app.listen(7865, done);
  });

  it('should return status code 200 for GET /', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct result for GET /', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
