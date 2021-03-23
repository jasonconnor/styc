import { useState } from 'react';
import { useForm } from 'react-hook-form';

// Local Imports
import RegistrationSerivce from 'services/RegistrationService';
import FormInput from 'components/shared/forms/FormInput';
import Message from 'models/messaging/Messages';

/*
import RegistrationForm from 'components/registration/registration-form/RegistrationForm';

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
  const { errors, handleSubmit, register, reset } = useForm({ mode: 'onChange' });

  async function attemptRegistration(data) {
    try {
      await RegistrationSerivce.registerUser(data)
    } catch (error) {
      setFormError(error);
    }
    reset();
  }

  return (
    <form 
      encType='multipart/form-data'
      onSubmit={handleSubmit(attemptRegistration)} 
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
            message: Message.RequireUsername
          },
          minLength: {
            value: 4,
            message: Message.UsernameTooLong
          },
          maxLength: {
            value: 20,
            message: Message.UsernameTooLong
          },
          pattern: {
            value: /^[A-Za-z0-9-_]*$/,
            message: Message.InvalidUsername
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
            message: Message.RequirePassword
          },
          minLength: {
            value: 6,
            message: Message.PasswordTooShort
          },
          maxLength: {
            value: 20,
            message: Message.PasswordTooLong
          },
          pattern: {
            value: /^[A-Za-z0-9!@#$%^&*]*$/,
            message: Message.InvalidPassword
          },
        })}
      />

      <input type='submit' value='Register' />
    </form>
  );
}
