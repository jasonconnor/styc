import React from 'react';

/* Harness:
import FormInput from 'components/shared/forms/FormInput';

<FormInput
    label='Username:'
    type='text'
    name='username'
    placeholder='Username'
    error='some error message'
    ref={register({
      required: {
        value: true,
        message: Message.RequireUsername,
      },
    })}
/>
*/

/**
 * Reusable form component with Label, Input field and Error message.
 */
const FormInput = React.forwardRef((props, ref) => {
  return (
    <div className='formInput'>
      <label>{props.label}</label>

      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        ref={ref}
        autoComplete='off'
      />

      <span>{props.error}</span>
    </div>
  );
});

export default FormInput;