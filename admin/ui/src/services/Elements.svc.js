import axios from 'axios'
import { APIURL } from './App.svc'

export const GetAllElements = async () => {
  try {
    const response = await axios.get(`${APIURL}/elements`)
    return {elements: response.data}
  } catch (error) {
    console.error('Elements.svc|GetAllElements: ', error.message)
    return {error}
  }
}