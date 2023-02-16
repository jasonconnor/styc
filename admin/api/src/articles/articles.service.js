import { ArticlesModel } from './articles.model.js'

export async function getAllArticles() {
  try {
    const articles = await ArticlesModel.find()
    return [articles, null]
  } catch (error) {
    console.error(error)
    return [null, error]
  }
}