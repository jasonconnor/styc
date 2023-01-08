import { getAllArticles } from './articles.service.js'

export async function findAll(request, response) {
  const [articles, error] = await getAllArticles()

  if (error) return response.status(500).json({error: 'Error fetching articles.'})

  return response.status(200).json(articles)
}