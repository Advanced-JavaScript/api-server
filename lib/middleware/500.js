'use strict';

module.exports = (err, req, res) => {
    const error = {
        errorText: 'Server Error',
        error: err,
      };
    res.status(500).json(error);
};