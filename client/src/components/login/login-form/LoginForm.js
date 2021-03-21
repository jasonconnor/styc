import { useState } from 'react';
import { useForm } from 'react-hook-form';

// Local Imports
import FormInput from 'components/shared/forms/FormInput';
import LoginService from 'services/LoginService';
import Message from 'models/messaging/Messages';

/*
import LoginForm from 'components/login/login-form/LoginForm';

<LoginForm />
*/

// TO DO: style compenent with Martial UI
// TO DO: integrate yup schema validation
// TO DO: make this a sub-component and make a wrapper login page component that utilizes this on the page
/**
 * Login form component.
 *
 * Currently acting as the entire Login Page Component
 */
export default function LoginForm({ history }) {
  const [formError, setFormError] = useState('');
  const { errors, handleSubmit, register } = useForm({ mode: 'onChange' });

  async function attemptLogin(data, event) {
    try {
      await LoginService.login(data);
    } catch (error) {
      setFormError(error);
    }

    event.target[1].value = '';
  }

  return (
    <form
      onSubmit={handleSubmit(attemptLogin)}
      encType='multipart/form-data'
    >
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
            message: Message.RequireUsername,
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
            message: Message.RequirePassword,
          },
        })}
      />

      <input type='submit' value='Login' />
    </form>
  );
}
