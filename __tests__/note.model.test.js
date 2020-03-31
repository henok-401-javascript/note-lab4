'use strict';
const schemaModule = require('../lib/notes.js');
const supergoose = require('supergoose');




let fakeData = async () => {
  await schemaModule.add({
    text: 'henok\'s fake data',
    category: 'human',
  });
  await schemaModule.add({
    text: 'dog',
    category: 'animal',
  });

};
console.log(schemaModule);

describe('save to database', () => {
  it('for truthy value', async () => {
    let TestDBA = await schemaModule.add({
      text: 'henok fake data',
      category: 'human',
    });
    console.log(TestDBA);
    expect(TestDBA).toBeTruthy();
    expect(TestDBA.text).tobe('henok fake data');
  });
});