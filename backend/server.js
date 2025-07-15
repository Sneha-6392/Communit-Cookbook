import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
// Connect to MongoDB
app.get('/', (req, res) => {
    res.send('Welcome to the Community Cookbook API!');
    });
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});