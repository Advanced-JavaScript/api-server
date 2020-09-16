'use strict';
/**
 * @module router 
 * @exports express.Router determine the route
 */
const express = require('express');
const params = require('../middleware/params');

const router = express.Router();
router.param('model', params);

router.post('/:model', postHandler);
router.get('/:model', getAllHandler);
router.get('/:model/:id', getOneHandler);
router.put('/:model/:id', putAllHandler);
router.delete('/:model/:id', deleteAllaunler);

async function postHandler(req, res, next) {
  try {
    const data = await req.model.create(req.body);
    res.status(201).json(data);
  } catch (e) {
    next(e);
  }
}

function getAllHandler(req, res, next) {
  req.model.read().then(data => res.status(200).json({ count: data.length, 'results': data }))
    .catch((err) => next(err));
}

function getOneHandler(req, res, next) {
  req.model.read(req.params.id).then(data => res.status(200).json(data))
    .catch((err) => next(err));
}

function putAllHandler(req, res, next) {
  req.model.update(req.params.id, req.body).then(data => res.status(200).json(data))
    .catch((err) => next(err));
}

function deleteAllaunler(req, res, next) {
  req.model.delete(req.params.id).then(data => res.status(200).json(data))
    .catch((err) => next(err));
}

module.exports = router;