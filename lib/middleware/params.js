'use strict';
/**
 * @module params get the route and add id to req params model 
 * @function params
 * @param {object} req
 * @param {object} res 
 * @param {function} next this is next function 
 */
const categories = require('../models/categories/categories.collection');
const products = require('../models/products/products.collection');
const items = require('../models/items/items.collection');

module.exports = (req, res, next) =>{
  const model = req.params.model;
  switch (model) {
  case 'categories':
    req.model = categories;
    next();
    return;
  case 'products':
    req.model = products;
    next();
    return;
  case 'items':
    req.model = items;
    next();
    return;
  case 'bad':
    res.status(500);
    next('Server Error');
    return;
  default:
    res.status(404);
    next('Unavailable');
    return;
  }
};