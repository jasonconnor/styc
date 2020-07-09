import React from 'react'
import TextInput from './forms/input'
import validator from './forms/validator'
import '../style/form.scss'

const initialState = {
  formIsValid: false,
  form: {
    username: {
      type: 'text',
      name: 'username',
      value: '',
      label: 'Username',
      placeholder: 'Username',
      touched: false,
      valid: false,
      error: '',
      validation: {
        required: true,
        minLength: 3,
        maxLength: 15,
        specialChars: true
      }
    },
    email: {
      type: 'email',
      name: 'email',
      value: '',
      label: 'Email',
      placeholder: 'Email (Optional)',
      touched: false,
      valid: true,
      error: '',
      validation: {
        email: true
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
        minLength: 5,
        maxLength: 20,
        specialChars: true
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
    let name = event.target.name
    let value = event.target.value

    let updatedForm = {...this.state.form}
    let updatedField = {...updatedForm[name]}

    updatedField.value = value
    updatedField.touched = true

    let validation = validator.isValid(value, updatedField.validation)

    updatedField.valid = validation.isValid
    updatedField.error = !updatedField.valid ? `${updatedField.label} ${validation.error}`  : ''

    updatedForm[name] = updatedField

    let isFormValid = true
    for (let input in updatedForm) {
      if (!updatedForm[input].valid){
        isFormValid = false
      }
    }

    this.setState({
      form: updatedForm,
      formIsValid: isFormValid
    })
  }

  async handleSubmit(event) {
    event.preventDefault()

    let email = this.state.form.email.value
      ? this.state.form.email.value
      : undefined

    let user = {
      username: this.state.form.username.value,
      email: email,
      password: this.state.form.password.value
    }
    
    try {
      const settings = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
      }

      let result = await fetch('/register', settings)

      console.log(result)
    } catch(error) {
      console.log(error)
    }

    this.setState(initialState)
  }

  render() {
    return (

      <form onSubmit={this.handleSubmit} noValidate>
        <h1>Register</h1>

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

        <TextInput
          type={this.state.form.email.type}
          name={this.state.form.email.name}
          value={this.state.form.email.value}
          label={this.state.form.email.label}
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
          label={this.state.form.password.label}
          placeholder={this.state.form.password.placeholder}
          touched={this.state.form.password.touched}
          valid={this.state.form.password.valid}
          error={this.state.form.password.error}
          onChange={this.handleChange}
        />

        <input
          type='submit'
          value='Register'
          disabled={!this.state.formIsValid}
        />

      </form>
    )
  }
}

export default RegisterForm