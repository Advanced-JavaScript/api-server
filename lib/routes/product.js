// 'use strict';

// const express = require('express');
// const product = require('../models/products/products.collection');
// const router = express.Router();

// router.post('/products', postProduct);
// router.get('/products', getAllProducts);
// router.get('/products/:id', getProduct);
// router.put('/products/:id', putProduct);
// router.delete('/products/:id', deleteProduct);

// async function postProduct(req, res, next) {
//   try {
//     const data = await product.create(req.body);
//     res.status(201).json(data);
//   } catch (e) {
//     next(e);
//   }
// }

// async function getAllProducts(req, res, next) {
//   try {
//     const data = await product.read();
//     const count = data.length;
//     res.status(200).json({ count, data });
//   } catch (e) {
//     next(e);
//   }
// }

// async function getProduct(req, res, next) {
//   try {
//     const data = await product.read(req.params.id);
//     res.status(200).json(data);
//   } catch (e) {
//     next(e);
//   }
// }

// async function putProduct(req, res, next) {
//   try {
//     const data = await product.update(req.params.id);
//     res.status(200).json(data);
//   } catch (e) {
//     next(e);
//   }
// }

// async function deleteProduct(req, res, next) {
//   try {
//     const data = await product.delete(req.params.id);
//     res.status(200).json(data);
//   } catch (e) {
//     next(e);
//   }
// }

// module.exports = router;
