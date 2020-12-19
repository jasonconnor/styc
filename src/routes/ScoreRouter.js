import express from 'express';

import * as ScoreController from '../controllers/ScoreController.js';

const ScoreRouter = express.Router();

// GET Routes
ScoreRouter.get('/highscores', ScoreController.getHighScores);

// POST Routes
ScoreRouter.post('/save', ScoreContorller.saveScore);

export default ScoreRouter;