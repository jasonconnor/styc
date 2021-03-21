import { useState } from 'react';
import { useForm } from 'react-hook-form';

// Local Imports
import FormInput from 'components/shared/forms/FormInput';
import Message from 'models/messaging/Messages';

/*
import RegistrationForm from 'components/registration/registration-form/RegistrationForm;

<RegistrationForm />
*/

// TO DO: style compenent with Martial UI
// TO DO: integrate yup schema validation
// TO DO: make this a sub-component and make a wrapper login page component that utilizes this on the page
/**
 * Registration Form component.
 *
 * Currently acting as the entire Registration Page Component.
 */

export default function RegistrationForm({ history }) {
  const [formError, setFormError] = useState('');
  const { errors, handleSubmit, register } = useForm({ mode: 'onChange' });

  async function attemptRegistration(data, event) {
    try {
      // Add service here
    } catch (error) {
      setFormError(error);
    }
  }

  return (
    <form onSubmit={handleSubmit(attemptRegistration)} encType='multipart/form-data'>
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
          minLength: {
            value: 6,
            message: 'Username must be at least 6 characters long.',
          },
          maxLength: {
            value: 20,
            message: 'Username cannot be longer than 20 characters.',
          },
          pattern: {
            value: /^[A-Za-z0-9-_]*$/,
            message: 'Usernames cannot include special characters.',
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
          minLength: {
            value: 6,
            message: 'Your password must be at least 6 characters long.',
          },
          maxLength: {
            value: 20,
            message: 'Your password cannot be longer than 20 characters.',
          },
          pattern: {
            value: /^[A-Za-z0-9!@#$%^&*]*$/,
            message: 'Passwords can only contain certain special characters.',
          },
        })}
      />

      <input type='submit' value='Register' />
    </form>
  );
}
