import React from 'react'
import TextInput from './forms/input'
import '../style/form.scss'

const initialState = {
  form: {
    username: {
      type: 'text',
      name: 'username',
      value: '',
      placeholder: 'Username',
      touched: false,
      valid: false,
      error: '',
      validation: {
        required: true,
        minLength: 2,
        maxLength: 15
      }
    },
    email: {
      type: 'email',
      name: 'email',
      value: '',
      placeholder: 'Email (Optional)',
      touched: false,
      valid: false,
      error: '',
      validation: {
        required: true,
        email: true
      }
    },
    password: {
      type: 'password',
      name: 'password',
      value: '',
      placeholder: 'Password',
      touched: false,
      valid: false,
      error: '',
      validation: {
        required: true,
        minLength: 5,
        maxLength: 20
      }
    }
  }
}

class RegisterForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = initialState
    
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {

  }

  render() {
    return (
      <form noValidate>
        <h1>Register</h1>

        <TextInput
          type={this.state.form.username.type}
          name={this.state.form.username.name}
          value={this.state.form.username.value}
          placeholder={this.state.form.username.placeholder}
          touched={this.state.form.username.touched}
          valid={this.state.form.username.valid}
          error={this.state.form.username.error}
          onChange={this.handleChange}
        />

        <TextInput
          type={this.state.form.email.type}
          name={this.state.form.email.name}
          value={this.state.form.email.value}
          placeholder={this.state.form.email.placeholder}
          touched={this.state.form.email.touched}
          valid={this.state.form.email.valid}
          error={this.state.form.email.error}
          onChange={this.handleChange}
        />

        <TextInput
          type={this.state.form.password.type}
          name={this.state.form.password.name}
          value={this.state.form.password.value}
          placeholder={this.state.form.password.placeholder}
          touched={this.state.form.password.touched}
          valid={this.state.form.password.valid}
          error={this.state.form.password.error}
          onChange={this.handleChange}
        />

        <input
          type='submit'
          value='Register'
        />

      </form>
    )
  }
}

export default RegisterForm