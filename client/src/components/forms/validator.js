class Validator {

  isValid(value, validation) {
    let requiredError, 
        minLengthError,
        maxLengthError = false
    let error = ''

    if (validation.hasOwnProperty('required')) {
      if (validation.required) {
        requiredError = this.isInvalidRequired(value)
        error =  requiredError ? ' is required.' : ''
      }
    }

    if (validation.hasOwnProperty('minLength')) {
      minLengthError = this.isInvalidMinLength(value, validation.minLength)
      error = minLengthError ? ' must be at least ' + validation.minLength + ' characters long.' :  ''
    }

    if (validation.hasOwnProperty('maxLength')) {
      maxLengthError = this.isInvalidMaxLength(value, validation.maxLength)
      error = maxLengthError ? ' can only be ' + validation.maxLength + ' characters long.' : ''
    }

    return {
      isValid: !(requiredError || minLengthError || maxLengthError),
      error: error
    }
  }

  isInvalidRequired(value) {
    return value.trim() == ''
  }

  isInvalidMinLength(value, minLength) {
    return value.length < minLength
  }

  isInvalidMaxLength(value, maxLength) {
    return value.length > maxLength
  }
}

const validator = new Validator()
export default validator