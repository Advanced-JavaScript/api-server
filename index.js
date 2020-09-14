'use strict';

require('dotenv').config();
const server = require('./lib/server.js');

server.start(process.env.PORT || 8000);
