const request = require('supertest');
const app = require('./api');
let server;

before((done) => {
  server = app.listen(0, () => { // Use port 0 for dynamic port assignment
    done();
  });
});

after((done) => {
  server.close(done); // Ensure the server is closed after the tests
});

describe('Index page', () => {
  it('should return status code 200 for GET /', (done) => {
    request(server)
      .get('/')
      .expect(200, done);
  });

  it('should return correct result for GET /', (done) => {
    request(server)
      .get('/')
      .expect(200)
      .expect('Welcome to the payment system', done);
  });
});
