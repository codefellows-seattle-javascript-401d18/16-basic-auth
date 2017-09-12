'use strict';

const server = require('../../lib/server');
// const User = require('../../model/user');
const superagent = require('superagent');
const faker = require('faker');
require('jest');

describe('Testing basic auth routes', function() {
  beforeAll(server.start);
  afterAll(server.stop);


  describe('POST to /api/signup', function() {
    beforeAll(() => {
      this.mockUserData = {
        username: faker.internet.userName(),
        password: faker.internet.password(),
        email: faker.internet.email(),
      };

      describe('should return and post a new user', () => {
        return superagent.post(':4000/api/signup')
          .send(this.mockUserData)
          .then(res => {
            this.res = res;
            expect(this.res.status).toBe(200);
          });
      });

      describe('invalid requests', () => {
        test('should return a 400 error code');
        return superagent.post(`:4000/api/signup`)
          .send({})
          .then(res => {
            this.res = res;
            expect(this.res.status).toBe(401);
          });
      });
      test('should return a 404 error code');
      return superagent.post(`:4000/api/signup`)
        .send({})
        .then(res => {
          this.res = res;
          expect(this.res.status).toBe(404);
        });
    });

    test('should respond with a token', () => {
      expect(this.res.text).toBeTruthy();
      expect(this.res.text.length > 1).toBeTruthy();
    });
    test('should return a status of 201', () => {
      expect(this.res.status).toBe(201);
    });
  });

  describe('GET to /api/signin', function() {
    beforeAll(() => {
      return mocks.user.createOne()
        .then(userData => {
          this.tempUser = userData.user;

          return superagent.get(':4444/api/signin')
            .auth(userData.user.username, userData.password)
            .then(res => this.res = res);
        });
    });

    test('should return a token', () => {
      expect(this.res.text).toBeTruthy();
      expect(this.res.text.length > 1).toBeTruthy();
    });

    test('should return a status of 200', () => {
      expect(this.res.status).toBe(200);
    });
  });

  describe('invalid requests', () => {
    test('should return a 400 error code with a bad sign in');
    return superagent.post(`:4000/api/signin`)
      .auth(this.mockUserData.password)
      .send({})
      .then(res => {
        this.res = res;
        expect(this.res.status).toBe(401);
      });
  });
  test('should return a 404 error code');
  return superagent.post(`:4000/api/signin`)
    .auth(this.mockUserData.password)
    .send({})
    .then(res => {
      this.res = res;
      expect(this.res.status).toBe(404);
    });
});
