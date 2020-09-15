'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const server = require('./lib/server.js');

const MONGOOSE_URI = process.env.MONGOOSE_URI;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
};
// MONGOOSE_URI
mongoose.connect('mongodb://localhost:27017/store', options);


server.start(process.env.PORT || 8000);
