import express from 'express';

import connect from './conf/db.js';

import AuthRouter from './src/routes/auth.js';

const app = express();

app.use(express.json());

app.use('/', AuthRouter);

app.listen(80, () => {
  connect();
  console.log('Server started.');
});