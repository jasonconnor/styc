import { getAllElements } from "./elements.service.js"

export const findAll = async (request, response) => {
  const {elements, error} = await getAllElements()

  if (error) return response.status(500).json({error: 'Error fetching elements.'})

  return response.status(200).json(elements)
}