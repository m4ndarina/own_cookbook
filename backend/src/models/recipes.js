const mongoose = require('mongoose');
const { nanoid } = require('nanoid');

const recipeSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: () => nanoid(10)
  },
  name: {
    type: String,
    required: [true, 'El nombre es obligatorio']
  },
  description: {
    type: String,
    required: [true, 'La descripción es obligatoria']
  },
  ingredients: [{
    type: String,
    required: [true, 'Los ingredientes son obligatorios']
  }],
  steps: [{
    type: String,
    required: [true, 'Los pasos son obligatorios']
  }],
  imageUrl: {
    type: String,
    default: 'https://placehold.co/400x400' // imagen por defecto
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const recipe = mongoose.model('recipe', recipeSchema);

module.exports = recipe;
