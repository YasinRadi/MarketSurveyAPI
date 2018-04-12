const request = require('supertest')
const server  = request('http://localhost:3000')

/**
 * 
 * /surveys TESTS
 * 
 */

// is 200 OK
describe('GET /surveys', function() {
  it('Should return 200 OK', function(done) {
    server
      .get('/surveys')
      .expect(200, done)
  })
})