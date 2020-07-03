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
      />

      <span></span>

    </div>
  )
}

export default TextInput