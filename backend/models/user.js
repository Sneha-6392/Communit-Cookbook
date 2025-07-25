import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    createdAt: {type: Date, default: Date.now},
    profileImage: {type: String},
    bio: {type: String, default: ''},
    savedRecipes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recipe' }]
}, {
    timestamps: true});

export default mongoose.model('User', userSchema);
