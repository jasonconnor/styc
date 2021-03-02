import express from 'express';

import ScoreController from '../controllers/ScoreController.js';
import Authenticate from '../middleware/Authenticate.js';

const ScoreRouter = express.Router();

// GET Routes
ScoreRouter.get('/highscores', ScoreController.getHighscores);

// POST Routes
ScoreRouter.post('/save', Authenticate.checkToken, ScoreController.saveScore);

export default ScoreRouter;