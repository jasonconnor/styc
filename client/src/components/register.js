import React from 'react'
import TextInput from './forms/input'
import validator from './forms/validator'
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
        minLength: 3,
        maxLength: 15
      }
    },
    email: {
      type: 'email',
      name: 'email',
      value: '',
      placeholder: 'Email (Optional)',
      touched: false,
      valid: true,
      error: '',
      validation: {
        required: false,
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
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const name = event.target.name
    const value = event.target.value

    const updatedForm = {...this.state.form}
    const updatedField = {...updatedForm[name]}

    updatedField.value = value
    updatedField.touched = true
    updatedField.valid = validator.validate(value, updatedField.validation)

    !updatedField.valid ? updatedField.error = updatedField.name + ' is invalid' : updatedField.error = ''

    updatedForm[name] = updatedField

    this.setState({
      form: updatedForm
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log(this.state)
  }

  render() {
    return (

      <form onSubmit={this.handleSubmit} noValidate>
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

        <p>{this.state.form.username.valid.toString()}</p>

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

        <p>{this.state.form.email.valid.toString()}</p>

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

        <p>{this.state.form.password.valid.toString()}</p>

        <input
          type='submit'
          value='Register'
        />

      </form>
    )
  }
}

export default RegisterForm