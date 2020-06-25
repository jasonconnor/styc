import React from 'react'

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: {
        value: ''
      },
      password: {
        value: ''
      }
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const target = event.target
    const name = target.name
    const value = target.value

    this.setState({
        [name]: value
    })
  }

  handleSubmit(event) {
    alert('You submitted: ' + this.state.username + ' || ' + this.state.password)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Username:</label>
        <input
          type='text'
          name='username'
          value={this.state.username.value}
          onChange={this.handleChange}
        />

        <label>Password:</label>
        <input
          type='text'
          name='password'
          value={this.state.password.value}
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