'use strict';
const mongoose = require('mongoose');
const minimist = require('minimist');
// const schemaModule = require('./models/note.schema.js');
const Input = require('./lib/input.js');
const NoteHandler = require('./lib/notes');
const Model = require('./models/notes-model.js');

const URLDB = 'mongodb://localhost:27017/app';
const args = process.argv.slice(2);


mongoose.connect(URLDB, { useNewUrlParser: true, useUnifiedTopology: true });

const myInput = new Input(args);

const myNote = new NoteHandler(myInput.command);
const myModel = new Model(myNote);





// mongoose.disconnect();