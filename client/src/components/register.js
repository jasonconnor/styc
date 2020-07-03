import React from 'react'
import TextInput from './forms/input'
import '../style/form.scss'

const initialState = {
  form: {
    username: {
      type: 'text',
      name: 'username',
      value: '',
      placeholder: 'Username'
    },
    email: {
      type: '',
      name: '',
      value: '',
      placeholder: 'Email (Optional)',
    },
    password: {
      type: '',
      name: '',
      value: '',
      placeholder: 'Password'
    }
  }
}

class RegisterForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = initialState
    
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
        />

        <TextInput
          type={this.state.form.email.type}
          name={this.state.form.email.name}
          value={this.state.form.email.value}
          placeholder={this.state.form.email.placeholder}          
        />

        <TextInput
          type={this.state.form.password.type}
          name={this.state.form.password.name}
          value={this.state.form.password.value}
          placeholder={this.state.form.password.placeholder}
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