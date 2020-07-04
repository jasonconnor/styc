class Validator {
  constructor() {
    this.requiredValidator = this.requiredValidator.bind(this)
  }

  validate(value, validation) {
    let isValid = true

    if (validation.hasOwnProperty('required')) {
      if (validation.required) {
        isValid = this.requiredValidator(value)
      } else {
        isValid = true
      }
    }

    return isValid
  }

  requiredValidator(value) {
    return value.trim() !== ''
  }
}

const validator = new Validator()
export default validator