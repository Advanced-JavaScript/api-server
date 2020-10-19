'use strict';

const schema = require('./items.schema');
const Model = require('../model');

class Item extends Model{
  constructor(){
    super(schema);
  }
}

module.exports = new Item();