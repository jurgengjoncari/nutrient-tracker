/**
 * add symptoms
 */
const app = require('../../../server');
const {Symptom} = app.models;

async function _0001() {
  try {
    const symptoms = require('../../../data/Symptoms.json');

    await Symptom.create(symptoms);
    console.log('Symptoms added successfully!');
  } catch (err) {
    console.error('Error adding symptoms:', err);
  }
}

_0001();
