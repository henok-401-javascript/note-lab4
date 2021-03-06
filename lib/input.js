'use strict';
const minimist = require('minimist');
const mongoose = require('mongoose');




class Input {

  constructor(arg) {
    this.command = {};


    let formated = minimist(arg);
    let keys = Object.keys(formated);
    // console.log(formated);
    keys.forEach(val => {

      switch (val) {
        case 'a':
        case 'add':
          this.command = {
            action: 'add',
            payload: formated[val],
            category: false,
          };
          break;
        case 'c':
        case 'category':
          this.command.category = typeof formated[val] === 'string' ? formated[val] : false;
          break;
        case 'l':
        case 'list':
          this.command = {
            action: 'l',
            payload: typeof formated[val] === 'string' ? formated[val] : false,
          };
          break;
        case 'd':
        case 'delete':
          this.command = {
            action: 'delete',
            payload: typeof formated[val] === 'string' ? formated[val] : false,
          };
          break;
        default:
          break;
      }
      console.log(this.command);
    });

  }
}

module.exports = Input;
