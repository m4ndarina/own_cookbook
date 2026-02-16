const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
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
    default: 'https://via.placeholder.com/300' // imagen por defecto
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const recipe = mongoose.model('recipe', recipeSchema);

module.exports = recipe;
