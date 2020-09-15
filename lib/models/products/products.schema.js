'use strict';

const mongoose = require('mongoose');

const product = mongoose.Schema({
  category: { type: String, required: true },
  name: { type: String, required: true },
  display_name: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model('product', product);