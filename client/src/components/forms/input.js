import React from 'react'

function TextInput(props) {
  return (
    <div className='form-group'>

      <label>{props.name}</label>

      <input
        type={props.type}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        className={props.className}
        touched={props.touched}
        valid={props.value}
        error={props.error}
        onChange={props.onChange}
      />

      <span className='error-msg'>{props.error}</span>

    </div>
  )
}

export default TextInput