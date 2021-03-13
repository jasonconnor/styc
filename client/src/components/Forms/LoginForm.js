import { useState } from 'react';
import { useForm } from 'react-hook-form';

import FormInput from './FormInput';

export default function LoginForm() {
  const [formError, setFormError] = useState('');
  const { errors, handleSubmit, register } = useForm({ mode: 'onChange' });

  async function onSubmit(data, event) {
    const formData = new FormData();

    formData.append('username', data.username);
    formData.append('password', data.password);

    let response = null;
    let result = null;

    try {
      response = await fetch('http://localhost:80/login', {
        method: 'POST',
        body: formData,
      });

      result = await response.json();
    } catch (error) {
      setFormError(error.message);
    }

    if (result === null) {
      setFormError('Received empty response from the server. Try again later.');
    } else if (result.hasOwnProperty('error')) {
      setFormError(result.error);
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
