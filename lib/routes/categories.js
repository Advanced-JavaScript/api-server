'use strict';

const express = require('express');
const category = require('../models/categories/categories.collection');
const router = express.Router();

router.post('/categories', postCategory);
router.get('/categories', getAllCategories);
router.get('/categories/:id', getCategory);
router.put('/categories/:id', putCategory);
router.delete('/categories/:id', deleteCategory);



async function postCategory(req, res, next) {
  try {
    const data = await category.create(req.body);
    res.status(201).json(data);
  } catch (e) {
    next(e);
  }
}

async function getAllCategories(req, res, next) {
  try {
    const data = await category.read();
    const count = data.length;
    res.status(200).json({ count, data });
  } catch (e) {
    next(e);
  }
}

async function getCategory(req, res, next) {
  try {
    const data = await category.read(req.params.id);
    res.status(200).json(data);
  } catch (e) {
    next(e);
  }
}

async function putCategory(req, res, next) {
  try {
    const data = await category.update(req.params.id);
    res.status(200).json(data);
  } catch (e) {
    next(e);
  }
}

async function deleteCategory(req, res, next) {
  try {
    const data = await category.delete(req.params.id);
    res.status(200).json(data);
  } catch (e) {
    next(e);
  }
}

module.exports = router;
