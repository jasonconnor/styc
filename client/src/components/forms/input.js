import React from 'react'

function TextInput(props) {
  let className = 'form-input'

  if (props.touched && !props.valid) {
    className = 'form-input input-error'
  }

  return (
    <div className='form-group'>

      <label>{props.name}</label>

      <input
        type={props.type}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        className={className}
        touched={props.touched}
        valid={props.valid}
        error={props.error}
        onChange={props.onChange}
      />

      <span className='error-msg'>{props.error}</span>

    </div>
  )
}

export default TextInput