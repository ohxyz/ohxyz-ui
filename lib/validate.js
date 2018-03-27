const validator = require('validator');
const util = require('./util.js');
const rules = require('./datatype.js').rules;

class StringValidator {

    constructor(inputString = '', options = {}) {

        if (typeof inputString !== 'string') {

            throw 'The type of input value must be string.';
        }

        this.inputString = inputString;
        this.options = options;
        this.sanitizedInputString = inputString.trim();
    }

    isAlphaSpace() {

        if (/^[a-zA-Z\s]+$/.test(this.sanitizedInputString) === true) {

            return true;
        }

        return false;
    }

    isEnglishName() {

        if (/^[a-zA-Z\s\.\'\,\-]+$/.test(this.sanitizedInputString) === true) {

            return true;
        }

        return false;
    }

    isEmpty() {

        if (this.sanitizedInputString === '') {

            return true;
        }

        return false;
    }

    isNumeric() {

        if (this.sanitizedInputString === '') {

            return true;
        }

        let min = parseFloat(util.setDefault(this.options.min, -Infinity));
        let max = parseFloat(util.setDefault(this.options.max, Infinity));
        let maxLength = util.setDefault(this.options.length, Infinity);

        if (validator.isNumeric(this.sanitizedInputString) === false) {

            return false;
        }

        if (this.sanitizedInputString.length > maxLength) {

            return false;
        }

        let value = parseFloat(this.sanitizedInputString);

        if (value > max || value < min) {

            return false;
        }

        return true;
    }

}

/* Validate Input 
 * 
 * @param ruleObject { object } - eg. { name: REQUIRED, value: '1234', min: 10, max: 20 }
 */

function validateByRule(ruleObject) {

    let inputString = util.setDefault(ruleObject.value, '');
    let ruleName = util.setDefault(ruleObject.name, rules.NONE);

    let stringValidator = new StringValidator(inputString, ruleObject);

    if (ruleName === rules.NONE) {

        return true;
    } else if (ruleName === rules.REQUIRED) {

        return !stringValidator.isEmpty();
    } else if (ruleName === rules.NUMERIC) {

        return stringValidator.isNumeric();
    } else if (ruleName === rules.ALPHA_SPACE) {

        return stringValidator.isAlphaSpace();
    } else if (ruleName === rules.ENGLISH_NAME) {

        return stringValidator.isEnglishName();
    }
}

module.exports = {

    validateByRule

};