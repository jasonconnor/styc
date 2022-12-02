import {
  useRef,
  useState
} from 'react'
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography
} from '@mui/material'
import { registerAccount } from '../../services/login/login.svc'
import './register.scss'
import { Link } from 'react-router-dom'

const defaultInputState = {
  isValid: true
}

const Register = () => {
  const usernameRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()

  const [inputState, setInputState] = useState(defaultInputState)

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateInput()

    if (!isValid) {
      setInputState({
        isValid: false
      })
      return
    }

    registerAccount(
      usernameRef.current.value.trim(),
      passwordRef.current.value.trim()
    )
  }

  const validateInput = () => {
    const passwordLength = passwordRef.current.value.trim().length

    if (passwordLength < 6 || passwordLength > 15)
      return false

    if (passwordRef.current.value !== confirmPasswordRef.current.value)
      return false

    // Add more here

    return true
  }

  return (
    <Stack id='register-container'
      direction='row'
      justifyContent='center'
    >
      <div className='content'>
        <h1>
          Register page
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
              fullWidth
              inputRef={usernameRef}
              onChange={() => setInputState(defaultInputState)}
              error={!inputState.isValid}
            />

            <TextField
              size='small'
              label='Password'
              fullWidth
              inputRef={passwordRef}
              onChange={() => setInputState(defaultInputState)}
              error={!inputState.isValid}
            />

            <TextField
              size='small'
              label='Confirm Password'
              fullWidth
              inputRef={confirmPasswordRef}
              onChange={() => setInputState(defaultInputState)}
              error={!inputState.isValid}
            />

            <Button
              variant='contained'
              onClick={handleSubmit}
              fullWidth
              type='submit'
            >
              Register
            </Button>

            <Stack
              className='log-in-container'
              direction='row'
              alignItems='center'
            >
              <Typography
                variant='subtitle2'
              >
                Already have an account?
              </Typography>
              <Button
                component={Link} 
                to='/Login'
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </div>
    </Stack>
  )
}

export default Register