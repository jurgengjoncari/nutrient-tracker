/**
 * add categories
 */
const app = require('../../../server');
const {Category} = app.models;

async function _0000() {
  try {
    const categories = require('../../../data/Categories.json');

    await Category.create(categories);
    console.log('Categories added successfully!');
  } catch (err) {
    console.error('Error adding categories:', err);
  }
}

_0000();
