import axios from 'axios'
import { APIURL } from '../../services/app/app.svc'

export const getHighscores = async () => {
  return await axios.get(`${APIURL}/scores`)
}