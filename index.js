import express from 'express';

import connect from './conf/db.js';

import AuthRouter from './src/routes/AuthRouter.js';
import ScoreRouter from './src/routes/ScoreRouter.js';
import UserRouter from './src/routes/UserRouter.js';

const app = express();

// middleware
app.use(express.json());

// routes
app.use('/', AuthRouter);
app.use('/', ScoreRouter);
app.use('/', UserRouter);

app.listen(80, () => {
  connect();
  console.log('Server started.');
});