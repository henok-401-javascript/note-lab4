'use strict';
const Input = require('./input.js');

class NoteHandler {
  constructor(command) {
    if (command && command.payload) {
      this.excute(command);
    } else {
      console.error('Invalid Input');
    }
  }
  excute(command) {
    switch (command.action) {
      case 'add':
        if (!command.payload) {
          console.error('wrong flag');
          return;
        }
        this.add(command.payload, command.category);
        break;
      case 'list':
        this.list(command.payload);
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
  add(payload) {

  }
  list(payload) {

  }
  add(payload) {

  }
}