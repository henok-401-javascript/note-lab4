'use strict';
const mongoose = require('mongoose');

const NoteModule = mongoose.Schema({
  text: { type: 'string', require: true },
  categorey: { type: 'string' },
});

const schemaModule = mongoose.model('notes', NoteModule);



module.exports = schemaModule;