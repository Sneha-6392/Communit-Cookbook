import mongoose from 'mongoose';

const favoriteSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  recipeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recipe',
    required: true,
  },
  savedAt: {
    type: Date,
    default: Date.now,
  }
});

// Optional: Prevent duplicate favorites for the same user + recipe
favoriteSchema.index({ userId: 1, recipeId: 1 }, { unique: true });

module.exports = mongoose.model('Favorite', favoriteSchema);
