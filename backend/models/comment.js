import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
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
  content: {
    type: String,
    required: true,
    trim: true,
    maxlength: 1000, // optional: limit comment length
  },
}, {
  timestamps: true // adds createdAt and updatedAt
});

module.exports = mongoose.model('Comment', commentSchema);
