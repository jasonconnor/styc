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

export const CreateNewEnemy = async (enemy) => {
  try {
    const param = {enemy}
    const response = await axios.post(`${APIURL}/enemies`, param)
    return {enemies: response.data}
  } catch (error) {
    console.error('Enemies.svc|CreateNewEnemy: ', error.message)
    return {error}
  }
}

export const DeleteEnemy = async (enemyId) => {
  try {
    const response = await axios.delete(`${APIURL}/enemies/${enemyId}`)
    return {result: response.data}
  } catch (error) {
    console.error('Enemies.svc|CreateNewEnemy: ', error.message)
    return {error}
  }
}