import { Box, Button, Stack, Switch } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { GetAllUserPreferences, UpdateUserPreferences } from '../../../services/UserPreference.svc'

const getUserPreferences = () => {
  const storedValues = GetAllUserPreferences()
  
  const mappedPreferences = Object.assign({...DEFAULT_PREFERENCES}, storedValues)
  return mappedPreferences
}

const PreferencesPanel = () => {
  const [userPref, setUserPref] = useState(getUserPreferences())

  useEffect(() => {
    UpdateUserPreferences(userPref)
  }, [userPref])
  
  const handleToggle = (pref) => (event) => {
    setUserPref(prev => {
      const newState = { ...prev }
      newState[pref] = event.target.checked
      return newState
    })
    console.log('User preferences: updated')
  }
  const handleResetClicked = () => {
    setUserPref(DEFAULT_PREFERENCES)
    console.log('User preferences: reset to default.')
  }

  return (
    <Stack alignItems='center' spacing={2}>
      {userPref && Object.entries(userPref).map(([key, value]) => (
        <Box key={key}>
          {wordMapping[key]}
          <Switch onChange={handleToggle(key)} checked={value} />
        </Box>
      ))}
      <span>
        <Button variant='contained' onClick={handleResetClicked}>
          Reset to Default
        </Button>
      </span>
    </Stack>
  )
}
const wordMapping = {
  'DisableLoadLastVisited': 'Disable loading last visited page',
  'DisableAbilityToCry': 'Disable ability to cry',
}

const DEFAULT_PREFERENCES = {
  'DisableLoadLastVisited': false,
  'DisableAbilityToCry': false
}

export default PreferencesPanel