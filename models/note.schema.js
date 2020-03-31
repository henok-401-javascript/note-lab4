'use strict';
const mongoose = require('mongoose');

const NoteModule = mongoose.Schema({
  text: { type: 'string', require: true },
  category: { type: 'string' },
});

const model = mongoose.model('notes', NoteModule);



module.exports = model;