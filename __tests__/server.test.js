'use strict';
const { apiServer } = require('../lib/server');
const supertest = require('supertest');
const mockRequest = supertest(apiServer);
require('@code-fellows/supergoose');

jest.timeout = 3000;


describe('sever', () => {
  it('should respond with 404 on an invalid route', () => {
    return mockRequest.get('/whatever').then(results => {
      expect(results.status).toBe(404);
    });
  });
  it('should respond with 404 on an invalid method', () => {
    return mockRequest.delete('/whatever').then(results => {
      expect(results.status).toBe(404);
    });
  });
  it('should return all products', () => {
    return mockRequest.get('/products').then(results => {
      expect(results.status).toBe(200);
    });
  });
  it('should return all categories', () => {
    return mockRequest.get('/categories').then(results => {
      expect(results.status).toBe(200);
    });
  });
  it('should add a new category', () => {
    let newCat = {
      name: "Clothes",
      display_name: "Clothes",
      description: "Whatever you need from Electronics"
    };
    return mockRequest.post('/categories').send(newCat).then(results => {
      expect(results.status).toBe(201);
    });
  });
  it('should add a new product', () => {
    let newPro = {
      category: "Clothes",
      name: "skirt",
      display_name: "Clothes",
      description: "Whatever you need from Electronics"
    };
    return mockRequest.post('/products').send(newPro).then(results => {
      expect(results.status).toBe(201);
    });
  });
  it('should delete a product', async () => {
    let newPro = {
      category: "Clothes",
      name: "skirt",
      display_name: "Clothes",
      description: "Whatever you need from Electronics"
    };
    const results = await mockRequest.post('/products').send(newPro);
    return mockRequest.delete(`/products/${results.body._id}`).then(result => {
      expect(result.status).toBe(200);
    });
  });
  it('should delete a category', async () => {
    let newCat = {
      name: "Clothes",
      display_name: "Clothes",
      description: "Whatever you need from Electronics"
    };
    const results = await mockRequest.post('/categories').send(newCat);
    return mockRequest.delete(`/categories/${results.body._id}`).then(result => {
      expect(result.status).toBe(200);
    });
  });
  it('should update a category', async () => {
    let newCat = {
      name: "Clothes",
      display_name: "Clothes",
      description: "Whatever you need from Electronics"
    };
    const results = await mockRequest.post(`/categories`).send(newCat);
    return mockRequest.put(`/categories/${results.body._id}`).send({name:'new'}).then(result => {
      expect(result.status).toBe(200);
    });
  });
  it('should update a product', async () => {
    let newPro = {
      name: "Clothes",
      category:"clothes",
      display_name: "Clothes",
      description: "Whatever you need from Electronics"
    };
    const results = await mockRequest.post(`/products`).send(newPro);
    return mockRequest.put(`/products/${results.body._id}`).send({name:'new'}).then(result => {
      expect(result.status).toBe(200);
    });
  });
  it('should return a specific product', async () => {
    let newPro = {
      name: "Clothes",
      category:"clothes",
      display_name: "Clothes",
      description: "Whatever you need from Electronics"
    };
    const results = await mockRequest.post(`/products`).send(newPro);
    return mockRequest.get(`/products/${results.body._id}`).then(result => {
      expect(result.status).toBe(200);
    });
  });
  it('should return a specific category', async () => {
    let newCat = {
      name: "Clothes",
      display_name: "Clothes",
      description: "Whatever you need from Electronics"
    };
    const results = await mockRequest.post(`/categories`).send(newCat);
    return mockRequest.get(`/categories/${results.body._id}`).then(result => {
      expect(result.status).toBe(200);
    });
  });


});