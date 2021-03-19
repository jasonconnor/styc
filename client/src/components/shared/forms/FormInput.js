import React from 'react';

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