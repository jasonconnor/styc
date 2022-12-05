import { getAccountStatsAndScores } from './account.service.js'

export async function getAccount(request, response) {
  const id = request.user

  const [user, error] = await getAccountStatsAndScores(id)

  if (error) return response.status(500).json({error: 'Failed to fetch user.'})
  
  if (!user) return response.status(400).json({error: 'No user found.'})

  return response.status(200).json(user)
}