import React from 'react'
import TextInput from './forms/input'
import '../style/form.scss'

const initialState = {
  formIsValid: false,
  form: {
    username: {
      type: 'text',
      name: 'username',
      value: '',
      label: 'Username',
      placeholder: 'username/email',
      touched: false,
      valid: false,
      error: '',
      validation: {
        required: true,
        login: true
      }
    },
    password: {
      type: 'password',
      name: 'password',
      value: '',
      label: 'Password',
      placeholder: 'Password',
      touched: false,
      valid: false,
      error: '',
      validation: {
        required: true,
        specialChars: true
      }
    }
  }
}

class LoginForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = initialState

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    let name = event.target.name
    let value = event.target.value

    let updatedForm = {...this.state.form}
    let updatedField = {...updatedForm[name]}

    updatedField.value = value
    updatedField.touched = true
    updatedField.valid = true

    updatedForm[name] = updatedField

    this.setState({
      form: updatedForm
    })
  }

  handleSubmit(event) {

  }

  render() {
    return (
      <form noValidate>
        <h1>Log In</h1>

        <TextInput
          type={this.state.form.username.type}
          name={this.state.form.username.name}
          value={this.state.form.username.value}
          label={this.state.form.username.label}
          placeholder={this.state.form.username.placeholder}
          touched={this.state.form.username.touched}
          valid={this.state.form.username.valid}
          error={this.state.form.username.error}
          onChange={this.handleChange}
        />

        <p>{this.state.form.username.valid.toString()}</p>

        <TextInput
          type={this.state.form.password.type}
          name={this.state.form.password.name}
          value={this.state.form.password.value}
          label={this.state.form.password.label}
          placeholder={this.state.form.password.placeholder}
          touched={this.state.form.password.touched}
          valid={this.state.form.password.valid}
          error={this.state.form.password.error}
          onChange={this.handleChange}
        />

        <p>{this.state.form.password.valid.toString()}</p>

        <input
          type='submit'
          value='Log In'
        />

      </form>
    )
  }
}

export default LoginForm