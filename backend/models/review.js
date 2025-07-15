import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  recipeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recipe',
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  review: {
    type: String,
    trim: true,
    maxlength: 1000,
    default: '',
  }
}, {
  timestamps: true // createdAt and updatedAt
});

module.exports = mongoose.model('Review', reviewSchema);
