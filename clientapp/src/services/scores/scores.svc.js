import axios from 'axios'

export const getHighscores = async (url) => {
  const response = await axios.get(url)
  return response
}