'use strict';
const myModel = require('../models/notes-model.js');
const supergoose = require('@code-fellows/supergoose');


fakeData(async () => {
  await schemaModel.create({
    text: 'henok\'s fake data',
    category: 'human',
  });
  await schemaModel.create({
    text: 'dog',
    category: 'animal',
  });

});


describe('save to database', () => {
  it('for truthy value', async () => {
    let TestDBA = await schemaModel.create({
      text: 'henok fake data',
      category: 'human',
    });
    console.log(TestDBA);
    expect(TestDBA).toBeTruthy();
    expect(TestDBA.text).tobe('henok fake data');
  });
});