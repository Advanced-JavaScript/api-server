'use strict';

const mongoose = require('mongoose');

const category = mongoose.Schema({
    name: { type: String, required: true },
    display_name: { type: String, required: true },
    description: { type: String, required: true }
});

module.exports = mongoose.model('category', category);