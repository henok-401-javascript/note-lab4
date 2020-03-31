'use strict';

const NoteHandler = require('../lib/notes.js');
const ModelDB = require('./note.schema.js');
const mongoose = require('mongoose');




class Model {

  constructor(modelSchena) {
    this.model = modelSchena;
  }


  async read(text, category) {

    try {
      let newModule = new ModelDB({
        text: text,
        category: category ? category : '',
      });
      await newModule.save();

      mongoose.disconnect();
    } catch (e) { console.error(e); }
  }

  async  list(category) {

    try {
      const allNoteDB = await ModelDB.find();
      allNoteDB.forEach(data => {
        console.log(data.text);
      });
      mongoose.disconnect();
    } catch (e) { console.error(e); }
  }

  async delete(payload) {
    try {
      await ModelDB.findByIdAndDelete(payload);
    } catch (e) { console.error(e); }
    mongoose.disconnect();
  }
}

module.exports = Model;
