import { useState } from 'react';
import { useForm } from 'react-hook-form';

// Local Imports
import FormInput from './FormInput';
import LoginService from '../../services/LoginService';

export default function LoginForm({history}) {
  const [formError, setFormError] = useState('');
  const { errors, handleSubmit, register } = useForm({ mode: 'onChange' });

  async function onSubmit(data, event) {
    try {
      await LoginService(data)
    } catch(error) {
      setFormError(error)
    }

    event.target[1].value = '';
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {formError ? <div>{formError}</div> : null}

      <FormInput
        type='text'
        name='username'
        label='Username:'
        placeholder='Username'
        error={errors?.username?.message}
        ref={register({
          required: {
            value: true,
            message: 'Username is required to log in.',
          },
        })}
      />

      <FormInput
        type='password'
        name='password'
        label='Password:'
        placeholder='Password'
        error={errors?.password?.message}
        ref={register({
          required: {
            value: true,
            message: 'Password is required to log in.',
          },
        })}
      />

      <input type='submit' value='Login' />
    </form>
  );
}
