import { createNewElement, findById, getAllElements } from "./elements.service.js"

export const findAll = async (request, response) => {
  const {elements, error} = await getAllElements()

  if (error) return response.status(500).json({error: 'Error fetching elements.'})

  return response.status(200).json(elements)
}

export const findOneId = async (request, response) => {
  const {id} = request.params

  const {element, error} = await findById(id)

  if (error) return response.status(500).json({error: 'Error fetching element by id.'})

  return response.status(200).json(element)
}

export const create = async (request, response) => {
  const {element} = request.body
  
  const {element: elementResult, error} = await createNewElement(element)

  if (error) return response.status(500).json({error: 'Error creating element.'})

  return response.status(201).json(elementResult)
}