'use strict';
/**
 * @module server
 * @exports expres 
 * @exports morgan
 * @exports cors
 * @exports middleware
 */

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const timestamp = require('./middleware/timestamp');
const logger = require('./middleware/logger');
const notFoundHandler = require('./middleware/404');
const errorHandler = require('./middleware/500');
const router = require('./routes/api');

const app = express();
app.use(express.json());
app.use(cors());
app.use(timestamp);
app.use(logger);
app.use(morgan('dev'));
app.use('/', router);


app.get('/', (req, res) => res.send('Homeeee!'));


//for testing purposes
app.get('/bad', (req, res)=> {
  throw new Error('Internal Server Error');
});

app.use('*',notFoundHandler);
app.use(errorHandler);

module.exports = {
  apiServer: app,
  start: port => {
    app.listen(port, () => console.log('Magic happens on:', port));
  },
};
