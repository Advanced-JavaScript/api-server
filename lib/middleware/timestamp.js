'use strict';

module.exports = (req, res, next) => {
    const date = new Date();
    req.requestTime = date.toUTCString();
    next();
  };