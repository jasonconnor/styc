import { getAllUsers, getUserById } from './users.service.js'

export async function findAll(request, response) {
  const [users, error] = await getAllUsers()

  if (error) return response.status(500).json({error: 'Error fetching users.'})

  return response.status(200).json(users)
}

export async function findById(request, response) {
  const { id } = request.params

  const [user, error] = await getUserById(id)

  if (error) return response.status(500).json({error: 'Error fetching user.'})
  
  if (user === null) return response.status(404).json({error: 'No user found.'})

  return response.status(200).json(user)
}