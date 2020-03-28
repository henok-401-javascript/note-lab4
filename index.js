'use strict';
const mongoose = require('mongoose');
const minimist = require('minimist');
// const schemaModule = require('./models/note.schema.js');
const Input = require('./lib/input.js');

const URLDB = 'mongodb://localhost:27017';
const args = process.argv.slice(2);


mongoose.connect(URLDB, { useNewUrlParser: true, useUnifiedTopology: true });

let myInput = new Input(args);





mongoose.disconnect();