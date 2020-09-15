'use strict';

class Model {
  constructor(schema) {
    this.schema = schema;
  }
  read(_id) {
    const queryObject = _id ? { _id } : {};
    return this.schema.find(queryObject);
  }
  create(record) {
    const newRecord = new this.schema(record);
    return newRecord.save();
  }
  update(_id, record) {
    return this.schema.findByIdAndUpdate(_id, record, { new: true });
  }
  delete(_id) {
    return this.schema.findByIdAndDelete(_id);
  }
}

module.exports = Model;