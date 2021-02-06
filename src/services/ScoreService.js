import Score from '../models/ScoreModel.js';

export default class ScoreService {
  static saveScore = async (score) => {
    const newScore = new Score(score);
    const result = await newScore.save();

    return result
  }

  static getAllScores =  async () => {
    const scores = await Score.find().select('score level date user').populate('user', 'username');
    return scores;
  }
}