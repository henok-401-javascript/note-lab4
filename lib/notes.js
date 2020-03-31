'use strict';
const Input = require('./input.js');
const schemaModule = require('../models/note.schema.js');
const mongoose = require('mongoose');

class NoteHandler {
  constructor(command) {
    if (command && command.action) {
      this.excute(command);

    }
    else {
      console.error('Invalid Input');
    }
  }
  excute(command) {
    console.log('excute ', command);
    switch (command.action) {
      case 'add':
        this.add(command.payload, command.category);
        if (!command.payload) {
          console.error('wrong flag');
          return;
        }

        break;
      case 'list':
        this.list(command.payload, command.category);
        break;
      case 'delete':
        if (!command.payload) {
          console.log('there is no note to be deleted');
          break;
        }
        this.delete(command.payload);
        break;
      default:
        break;
    }

  }
}

// async add(text, category) {

//   try {
//     let newModule = new schemaModule({
//       text: text,
//       category: category ? category : '',
//     });
//     await newModule.save();

//     mongoose.disconnect();
//   } catch (e) { console.error(e); }
// }

// async list(category) {

//   try {
//     const allNoteDB = await schemaModule.find();
//     allNoteDB.forEach(data => {
//       console.log(data.text);
//     });
//     mongoose.disconnect();
//   } catch (e) { console.error(e); }
// }

// async delete(payload) {
//   try {
//     await schemaModule.findByIdAndDelete(payload);
//   } catch (e) { console.error(e); }
//   mongoose.disconnect();
// }

//}

module.exports = NoteHandler;