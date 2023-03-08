import { isValidObjectId } from 'mongoose'
import { ElementsModel } from './elements.model.js'

export const getAllElements = async () => {
  try {
    const elements = await ElementsModel.find()
    return { elements }
  } catch (error) {
    console.error(error)
    return { error }
  }
}

export const findById = async (id) => {
  try {
    const element = await ElementsModel.findById(id)
    return { element }
  } catch (error) {
    console.error(error)
    return { error }
  }
}

export const findByName = async (name) => {
  try {
    const element = await ElementsModel.findOne({name})
    return { element }
  } catch (error) {
    console.error(error)
    return { error }
  }
}

export const createNewElement = async (newElement) => {
  try {
    const element = new ElementsModel({ ...newElement })
    const elementResult = await element.save()

    return { element: elementResult }
  } catch (error) {
    console.error(error)
    return { error }
  }
}

export const generateElementIdsFromElementsAsync = async (elements) => {
  const returnElementsIds = []

  let hasErrors = null;

  for (let requestElement of elements) {
    if (isValidObjectId(requestElement)) {
      const { element: elementFoundById } = await findById(requestElement)

      if (elementFoundById) {
        returnElementsIds.push(requestElement)
        continue;
      }
    } 

    // try to find the element by name,
    // possibly a new one created during this same request
    const { element: foundElementByName } = await findByName(requestElement)

    if (foundElementByName) {
      returnElementsIds.push(foundElementByName._id)
      continue;
    }    

    // element doesn't exist, create a new one
    const { element: newElement, error } = await createNewElement({name: requestElement})

    if (error) {
      hasErrors = {error}
      break;
    }

    returnElementsIds.push(newElement._id)
  }

  if (hasErrors) {
    return {error: hasErrors.error}
  }

  return {elements: returnElementsIds}
}