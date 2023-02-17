import { ArticlesModel } from './articles.model.js'

export async function getAllArticles() {
  try {
    const articles = await ArticlesModel.find()
    return {articles}
  } catch (error) {
    console.error(error)
    return {error}
  }
}