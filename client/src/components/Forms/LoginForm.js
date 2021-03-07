import { useForm } from 'react-hook-form';

import FormInput from './FormInput';

export default function LoginForm() {
  const { errors } = useForm({ mode: 'onChange' });

  return (
    <form>
      <FormInput
        type='text'
        name='username'
        label='Username:'
        placeholder='Username'
        error={errors?.username?.message}
      />

      <FormInput
        type='password'
        name='password'
        label='Password:'
        placeholder='Password'
        error={errors?.password?.message}
      />

      <input type='submit' value='Login' />
    </form>
  );
}
