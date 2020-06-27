import React from 'react'
import '../../style/form.scss'

const initialState = {
  username: '',
  password: ''
}

class LoginForm extends React.Component {
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

        <label>Password:</label>
        <input
          type='text'
          name='password'
          placeholder='password'
          value={this.state.password}
          onChange={this.handleChange}
        />

        <input
          type='submit'
          value='Log In'
        />
      </form>
    )
  }
}

export default LoginForm