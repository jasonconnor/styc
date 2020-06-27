import React from 'react'
import '../../style/form.scss'

const initialState = {
    username: '',
    email: '',
    password: '',
    usernameError: '',
    emailError: '',
    passwordError: ''
}

class RegisterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = initialState

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.validateForm = this.validateForm.bind(this)
  }

  handleChange(event) {
    const target = event.target
    const name = target.name
    const value = target.value

    this.setState({
      [name]: value
    })
  }

  validateForm() {
    let usernameError = ''
    let emailError = ''
    let passwordError = ''

    if (!this.state.username) {
        usernameError = 'You need a username to create an account'
    }

    if (this.state.password.length < 5) {
        passwordError = 'Your password must be at least 5 characters long'
    }

    if (!this.state.password) {
        passwordError = 'You need a password to create an account'
    }

    if (usernameError || passwordError) {
      this.setState({ usernameError, passwordError })
      return false
    }

    if (emailError) {
        this.setState({ emailError })
        return false
    }

    return true
  }

  handleSubmit(event) {
    event.preventDefault()
    const isValid = this.validateForm()

    if (isValid) {
      console.log(this.state)
      this.setState(initialState)
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Username:</label>
        <input
          type='text'
          name='username'
          placeholder='username'
          value={this.state.username}
          onChange={this.handleChange}
        />

        <span className='form-error'>{this.state.usernameError}</span>

        <label>Email:</label>
        <input
            type='email'
            name='email'
            placeholder='email (optional)'
            value={this.state.email}
            onChange={this.handleChange}
            formNoValidate
        />

        <span className='form-error'>{this.state.emailError}</span>

        <label>Password:</label>
        <input
          type='password'
          name='password'
          placeholder='password'
          value={this.state.password}
          onChange={this.handleChange}
        />

        <span className='form-error'>{this.state.passwordError}</span>

        <input
          type='submit'
          value='Register'
        />
      </form>
    )
  }
}

export default RegisterForm