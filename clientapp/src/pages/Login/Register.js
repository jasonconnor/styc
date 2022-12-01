import { 
  useRef,
  useState
} from 'react'
import { 
  Button, 
  Stack, 
  TextField, 
  Typography
} from '@mui/material'
import { registerAccount } from '../../services/login/login.svc'
import './register.scss'

const defaultInputState = {
  isValid: true,
  error: null
}

const Register = () => {
  const usernameRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()

  const [inputState, setInputState] = useState(defaultInputState)

  const register = () => {
    const isValid = validateInput()

    if (!isValid) {
      setInputState({
        isValid: false,
        error: "invalid inputs"
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
      <div>
        <h1>
          Register page
        </h1>

        <Stack alignItems='center' spacing={3}>
          <span>
            <TextField
              size='small'
              label='Username'
              inputRef={usernameRef}
              onChange={() => setInputState(defaultInputState)}
              className={!inputState.isValid ? 'invalidUsername' : null}
            />
          </span>

          <span>
            <TextField
              size='small'
              label='Password'
              inputRef={passwordRef}
              onChange={() => setInputState(defaultInputState)}
              className={!inputState.isValid ? 'invalidPassword' : null}
            />
          </span>

          <span>
            <TextField
              size='small'
              label='Confirm Password'
              inputRef={confirmPasswordRef}
              onChange={() => setInputState(defaultInputState)}
              className={!inputState.isValid ? 'invalidPassword' : null}
            />
          </span>

          <span>
            <Typography sx={{textAlign: 'center', color: 'red'}}>
              {!inputState.isValid ? inputState.error : null}
            </Typography>
            <Button
              variant='contained'
              onClick={register}
            >
              Register
            </Button>
          </span>
        </Stack>
      </div>
    </Stack>
  )
}

export default Register