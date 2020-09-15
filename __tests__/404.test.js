'use strict';
const { apiServer } = require('../lib/server.js');
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

});