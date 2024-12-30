/**
 * add micronutrients
 */
const app = require('../../../server');
const {Symptom: Micronutrient} = app.models;

async function _0002() {
  try {
    const micronutrients = require('../../../data/Micronutrients.json');

    await Micronutrient.create(micronutrients);
    console.log('Micronutrients added successfully!');
  } catch (err) {
    console.error('Error adding symptoms:', err);
  }
}

_0002();
