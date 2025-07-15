import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String], // array of ingredient strings
    required: true,
  },
  steps: {
    type: [String], // array of step-by-step instructions
    required: true,
  },
  image: {
    type: String, // image URL or filename
    default: '',
  },
  tags: {
    type: [String], // e.g. ["vegan", "breakfast"]
    default: [],
  },
  cookTime: {
    type: Number, // in minutes
    required: true,
  },
  difficulty: {
    type: String,
    enum: ['Easy', 'Medium', 'Hard'],
    default: 'Easy',
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  triedBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    }
  ],
}, {
  timestamps: true // adds createdAt and updatedAt
});

module.exports = mongoose.model('Recipe', recipeSchema);
