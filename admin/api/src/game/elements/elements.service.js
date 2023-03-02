import { ElementsModel } from './elements.model.js'

export const getAllElements = async () => {
  try {
    const elements = await ElementsModel.find()
    return {elements}
  } catch (error) {
    console.error(error)
    return {error}
  }
}

export const findById = async (id) => {
  try {
    const element = await ElementsModel.findById(id)
    return {element}
  } catch (error) {
    console.error(error)
    return {error}
  }
}

export const createNewElement = async (newElement) => {
  try {
    const element = new ElementsModel({...newElement})
    const elementResult = await element.save()
    
    return {result: elementResult}
  } catch (error) {
    console.error(error)
    return {error}
  }
}