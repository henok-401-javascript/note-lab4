'use strict';
const minimist = require('minimist');
const mongoose = require('mongoose');

const schemaModule = require('../models/note.schema');


class Input {
  constructor(args) {
    this.command = {};
    let formated = minimist(args);
    let keys = Object.keys(formated);

    keys.forEach(val => {

      switch (val) {
        case 'a':
        case 'add':
          this.command = {
            action: 'add',
            playload: formated[val],
            categotry: false,
          };
          break;

      }
      console.log(formated[val]);
    });


  }
}



module.exports = Input;
