import { ScoresModel } from './scores.model.js'

export async function createScore(data) {
  const score = new ScoresModel(data)

  try {
    const scoreResult = await score.save()
    return {scoreResult}
  } catch (error) {
    console.error(error)
    return {error}
  }
}


export async function getTop100Scores() {
  try {
    const scores = await ScoresModel
      .find()
      .sort({totalScore: -1})
      .limit(100)
      .populate('user')

    return {scores}
  } catch (error) {
    console.error(error)
    return {error}
  }
}