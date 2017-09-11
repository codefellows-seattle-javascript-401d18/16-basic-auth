'use strict';

const debug = require('debug')('http:server');
require('dotenv');

// setting up express
const express = require('express');
const router = express.Router();
const app = express();
debug('shut up debug');

// mongoose setup
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true});

// router middleware
require('../route/routh-auth');

// mount middleware
app.use(require('bodyParser').json());
app.use(require('cors')());
app.use(router);


app.all('/*', (req, res) => res.sendStatus(404));

module.exports = app;
