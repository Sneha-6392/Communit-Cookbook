import app from './app.js';
import http from 'http';
import dotenv from 'dotenv';
dotenv.config();


const server = http.createServer(app);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

