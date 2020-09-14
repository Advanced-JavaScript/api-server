'use strict';
const { apiServer } = require('../lib/server');
const supertest = require('supertest');
const mockRequest = supertest(apiServer);

describe('sever', () => {
  it('should respond with 404 on an invalid route', () => {
    return mockRequest.get('/whatever').then((results) => {
      expect(results.status).toBe(404);
    });
  });
  it('should respond with 404 on an invalid method', () => {
    return mockRequest.delete('/whatever').then((results) => {
      expect(results.status).toBe(404);
    });
  });
  it('should respond with 200 on /whatever', () => {
    return mockRequest.get('/categories').then((results) => {
      expect(results.status).toBe(200);
    });
  });
});