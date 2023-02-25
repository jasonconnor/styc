export const CheckUserPreference = (key) => {
  const userPref = localStorage.getItem('userPreferences')

  if (!userPref) return false

  const userPrefParsed = JSON.parse(userPref)
  return userPrefParsed[key]
}

export const GetAllUserPreferences = () => {
  const userPref = localStorage.getItem('userPreferences')

  if (!userPref || userPref === '') return null

  return JSON.parse(userPref)
}

export const UpdateUserPreferences = (userPref) => {
  const userPrefString = JSON.stringify(userPref)
  localStorage.setItem('userPreferences', userPrefString)
}

export const ClearUserPreferences = () => {
  localStorage.removeItem('userPreferences')
}