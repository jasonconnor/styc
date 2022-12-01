import { Button, Stack, TextField } from '@mui/material'
import { useRef } from 'react'
import { attemptLogin } from '../../services/login/login.svc'
import './login.scss'

const Login = () => {
  const usernameRef = useRef()
  const passwordRef = useRef()

  const login = () => {
    attemptLogin(
      usernameRef.current.value,
      passwordRef.current.value
    )
  }

  return (
    <Stack id='login-container'
      direction='row'
      justifyContent='center'
    >
      <div>
        <h1>
          Login page
        </h1>

        <Stack alignItems='center' spacing={3}>
          <span>
            <TextField
              size='small'
              label='Username'
              inputRef={usernameRef}
            />
          </span>
          <span>
            <TextField
              size='small'
              label='Password'
              inputRef={passwordRef}
            />
          </span>
          <span>
            <Button
              variant='contained'
              onClick={login}
            >
              Login
            </Button>
          </span>
        </Stack>
      </div>
    </Stack>
  )
}

export default Login