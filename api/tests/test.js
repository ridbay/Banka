// Importing dependencies for testing
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

// Configure chai to use the chai-http plugin
chai.use(chaiHttp);

// configure chai to use the should interface
chai.should();

// group the tests together with describe blocks
describe("Users", () => {
  describe("GET /", () => {
    // Test to get all users record
    it("should get all users record", (done) => {
      chai.request(app)
        .get('/')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
    // Test to get single user record
    it('should get a single user record', (done) => {
      const singleUserUrl = '/api/v1/users/:id';
      chai.request(app)
        .get(`/${singleUserUrl}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });

    // Test to get single student record
    it("should not get a single student record", (done) => {
      const singleUserUrl = '/api/v1/users/:id';
      chai.request(app)
        .get(`/${singleUserUrl}`)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });
});