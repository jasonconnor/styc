import express from 'express';

import connect from './conf/db.js';

const app = express();

app.listen(80, () => {
  connect();
  console.log('Server started.');
});