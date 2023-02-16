import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { attemptLogin } from '../../services/login/login.svc'
import './login.scss'

const isValidDefaults = {
  username: true,
  password: true
}

const Login = () => {
  const usernameRef = useRef()
  const passwordRef = useRef()

  const [isValid, setIsValid] = useState(isValidDefaults);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate Login
    let invalidInput = false;
    if (usernameRef.current.value.trim().length === 0) {
      setIsValid(prev => { return { ...prev, username: false } })
      invalidInput = true
    }

    if (passwordRef.current.value.trim().length === 0) {
      setIsValid(prev => { return { ...prev, password: false } })
      invalidInput = true
    }
    
    if (invalidInput) return

    // Send inputs to API
    attemptLogin(
      usernameRef.current.value,
      passwordRef.current.value
    )
  }

  const handleInputChanged = () => {
    setIsValid(isValidDefaults)
  }

  return (
    <Stack id='login-container'
      direction='row'
      justifyContent='center'
    >
      <div className='content'>
        <h1>
          Login page
        </h1>

        <Box
          component='form'
          noValidate
          autoComplete='off'
        >
          <Stack alignItems='center' spacing={3}>
            <TextField
              size='small'
              label='Username'
              inputRef={usernameRef}
              fullWidth
              required
              error={!isValid.username}
              onChange={handleInputChanged}
            />

            <TextField
              type='password'
              size='small'
              label='Password'
              inputRef={passwordRef}
              fullWidth
              required
              error={!isValid.password}
              onChange={handleInputChanged}
            />

            <Button
              variant='contained'
              onClick={handleSubmit}
              fullWidth
              type='submit'
            >
              Login
            </Button>

            <Stack
              className='sign-up-container'
              direction='row' 
              alignItems='center'
            >
              <Typography
                variant='subtitle2'
              >
                Don't have an account?
              </Typography>
              <Button
                component={Link}
                to='/Register'
              >
                Sign up
              </Button>
            </Stack>

          </Stack>
        </Box>
      </div>
    </Stack>
  )
}

export default Login