import { Cancel } from '@mui/icons-material'
import { IconButton, TextField } from '@mui/material'

/**
 * JSX Component for the text input field with a clear text button.
 * @param {{
 *  label: String,
 *  placeholder: String,
 *  value: String,
 *  required: Boolean,
 *  error: Boolean,
 *  onChange: Function,
 *  onEnterKeyPressed: Function
 *  onClearText: Function
 *  updateErrorState: Function
 * }} props The props passed into the component.
 * @param props.label The label to show for the text input field.
 * @param props.placeholder The placeholder text to show for the text input field.
 * @param props.value The value of the text input field.
 * @param props.required Indicates where or not the text input field is required.
 * @param props.error Indicates where or not the text input field is in the error state.
 * @param props.onChange The method to call when the text input field changes.
 * @param props.onEnterKeyPressed The method to call when the Enter key is pressed within the text input field.
 * @param props.onClearText The method to call when the clear text button is clicked.
 * @param props.updateErrorState The method to call to update the error state.
 */
const CustomTextField = (props) => {
  const {
    label,
    placeholder,
    value,
    required,
    error,
    onChange,
    onEnterKeyPressed,
    onClearText,
    updateErrorState
  } = props

  /** Method to call when a key is pressed within the text input field. */
  const onKeyDown = (event) => {
    if (props.error) updateErrorState(null)
    if (event.key === 'Enter') onEnterKeyPressed()
  }

  return (
    <TextField
      label={label}
      placeholder={placeholder}
      value={value}
      required={required}
      error={error !== null}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onBlur={_ => updateErrorState(null)}
      size='small'
      fullWidth
      InputProps={{
        endAdornment: props.value !== '' ? <IconButton onClick={onClearText}><Cancel /></IconButton> : null
      }}
      sx={props.value !== ''
        ? {
          '& > .MuiInputBase-root': {
            paddingRight: '0'
          }
        }
        : {
          '& > .MuiInputBase-root': {
            paddingRight: '26px'
          }
        }}
    />
  )
}

CustomTextField.defaultProps = {
  label: null,
  placeholder: null,
  required: false,
  error: null,
  onEnterKeyPressed: () => { },
  updateErrorState: () => { }
}

export default CustomTextField