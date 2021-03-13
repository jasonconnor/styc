import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import connect from './conf/db.js';

import AuthRouter from './src/routes/AuthRouter.js';
import ScoreRouter from './src/routes/ScoreRouter.js';
import UserRouter from './src/routes/UserRouter.js';

const app = express();
dotenv.config()

// middleware
app.use(express.json());
app.use(cors({origin: process.env.CLIENT_URI}));

// routes
app.use('/api/', AuthRouter);
app.use('/api/', ScoreRouter);
app.use('/api/', UserRouter);

//TODO: Setup HTTPS Server
app.listen(80, () => {
  console.log('Server started.');
  connect(process.env.MONGO_URI);
});