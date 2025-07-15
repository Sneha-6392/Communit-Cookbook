import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { connect } from mongoose;
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello duniyaa');
});
