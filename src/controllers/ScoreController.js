import Score from '../models/ScoreModel.js';

export default class ScoreController {
  static saveScore = async (req, res) => {
    // TODO: Add score validation

    const newScore = new Score({
      user: req.token.sub,
      score: req.body.score,
      level: req.body.level
    });

    let score = null;

    try {
      score = await newScore.save()
    } catch(error) {
      return res.status(500).json({
        message: 'Encountered an error while trying to save new score.',
        error: error.message
      });
    }

    return res.status(200).json({
      message: 'Successfully save new score.'
    })
  }
  
  static getHighscores = async (req, res) => {
    let scores = null

    try {
      // TODO: Make this look nicer
      // NOTE: Front-end will be responsible for sorting data
      scores = await Score.find().select('score level date user').populate('user', 'username');
    } catch(error) {
      return res.status(500).json({
        message: 'Encountered an error while trying to fetch scores.',
        error: error.message
      });
    }

    if (!scores) {
      return res.status(200).json({
        message: 'No scores have been submitted yet.'
      });
    }

    return res.status(200).json(scores);
  }
}