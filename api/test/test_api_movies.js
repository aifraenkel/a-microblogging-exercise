const assert = require('chai').assert;
const app = require('../index.js');
const request = require('supertest');

describe('/Api/movies tests', function() {
  it('should GET ALL available Movies', function(done) {
    request(app).get('/Api/movies')  
      .expect(200)    // successful return
      .end(function(err, res) {
        // run your tests on the content here
        assert.include(res.text, 'welcome to my app');

        // call done() to confirm that any async tests are completed, and we can move on to the next test
        done(err);
      });
  });
});