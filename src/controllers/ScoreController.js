import Score from '../models/ScoreModel.js';

export default class ScoreController {
  static saveScore = async (req, res) => {
    // TODO: Add score validation

    const newScore = new Score({
      user: req.token.sub,
      score: 10000,
      level: 50
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

    console.log(score)

    return res.status(200).json({
      message: 'Successfully save new score'
    })
  }
  
  static getHighScores = (req, res) => {

  }
}