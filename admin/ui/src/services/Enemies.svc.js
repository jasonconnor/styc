import axios from 'axios'
import { APIURL } from './App.svc'

export const GetAllEnemies = async () => {
  try {
    const response = await axios.get(`${APIURL}/enemies`)
    return {enemies: response.data}
  } catch (error) {
    console.error('Enemies.svc|GetAllEnemies: ', error.message)
    return {error}
  }
}