import { ScoresModel } from './scores.model.js'

export async function createScore(data) {
  const score = new ScoresModel(data)

  try {
    const result = await score.save()
    return [result, null]
  } catch (error) {
    console.error(error)
    return [null, error]
  }
}


export async function getTop100Scores() {
  try {
    const scores = await ScoresModel
      .find()
      .sort({totalScore: -1})
      .limit(100)
      .populate('user')

    return [scores, null]
  } catch (error) {
    console.error(error)
    return [null, error]
  }
}