class Validator {
  constructor() {
    this.requiredValidator = this.requiredValidator.bind(this)
  }

  validate(value, validation) {
    let isValid = true

    if (validation.hasOwnProperty('required')) {
      if (validation.required) {
        isValid = this.requiredValidator(value)
      }
    }

    if (validation.hasOwnProperty('minLength')) {
      isValid = this.minLengthValidator(value, validation.minLength)
    }

    return isValid
  }

  requiredValidator(value) {
    return value.trim() !== ''
  }

  minLengthValidator(value, minLength) {
    return value.length >= minLength
  }
}

const validator = new Validator()
export default validator