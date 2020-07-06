class Validator {
  isValid(value, validation) {
    let requiredError,
      minLengthError,
      maxLengthError,
      emailError,
      specialCharsError = false;
    let error = ''

    if (validation.hasOwnProperty('required')) {
      requiredError = this.isInvalidRequired(value)
    
      error = requiredError ? ' is required.' : ''

      if (requiredError) {
        return {
          isValid: !requiredError,
          error: error,
        }
      }
    }

    if (validation.hasOwnProperty('minLength')) {
      minLengthError = this.isInvalidMinLength(value, validation.minLength)

      error = minLengthError
        ? ` must be at least ${validation.minLength} characters long.`
        : ''

      if (minLengthError) {
        return {
          isValid: !minLengthError,
          error: error,
        }
      }
    }

    if (validation.hasOwnProperty('maxLength')) {
      maxLengthError = this.isInvalidMaxLength(value, validation.maxLength)

      error = maxLengthError
        ? ` can only be ${validation.maxLength} characters long.`
        : ''

      if (maxLengthError) {
        return {
          isValid: !maxLengthError,
          error: error,
        }
      }
    }

    if (validation.hasOwnProperty('email')) {
      emailError = this.isInvalidEmail(value)

      error = emailError
        ? ' is invalid.'
        : ''

      if (emailError) {
        return {
          isValid: !emailError,
          error: error,
        }
      }
    }

    if (validation.hasOwnProperty('specialChars')) {
      specialCharsError = this.hasSpecialChars(value)

      error = specialCharsError
        ? ' can only contain numbers and letters'
        : ''

      if (specialCharsError) {
        return {
          isValid: !specialCharsError,
          error: error
        }
      }
    }

    return {
      isValid: true,
      error: error
    };
  }

  /**
   * Validates if the form field is required and has text.
   * @param value - user input `value` in form input
   */
  isInvalidRequired(value) {
    return value.trim() === ''
  }

  isInvalidMinLength(value, minLength) {
    return value.length < minLength
  }

  isInvalidMaxLength(value, maxLength) {
    return value.length > maxLength
  }

  isInvalidEmail(value) {
    if (value !== '') {
      let regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      return !regexp.test(String(value).toLowerCase())
    }
  }

  hasSpecialChars(value) {
    let regexp = /^[0-9a-zA-Z]+$/
    return !value.match(regexp)
  }
}

const validator = new Validator()
export default validator
