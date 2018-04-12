const request = require('supertest')
const server = request('http://localhost:3000')

/**
 * 
 * '/' TESTS
 * 
 */

// is 200 OK
describe('GET /', function() {
  it('Should return 200 OK', function(done) {
    server
      .get('/')
      .expect(200, done)
  })
})