import validator from 'validator';
import util from './util.js';

const NONE = '';
const REQUIRED = 'required';
const ALPHA_SPACE = 'alpha-space';
const NUMERIC = 'numeric';
const ALPHANUMERIC_UNDERSCORE_HYPHEN = 'alphanumeric-underscore-hyphen';
const POSITIVE_INTEGER = 'positive-integer';
const TIME = 'time';
const ENGLISH_NAME = 'english-name';

class LiteralValidator {

    constructor( inputValue ) {

        if ( typeof inputValue !== 'string' ) {

            throw 'The type of input value must be string.';
        }

        this.sanitizedInputValue = inputValue.trim();

    }

    isAlphaSpace() {

        // console.log( '**********', this.sanitizedInputValue );

        if ( /^[a-zA-Z\s]+$/.test( this.sanitizedInputValue ) === true ) {

            return true;
        }

        return false;
    }

    isEnglishName() {

        if ( /^[a-zA-Z\s\.\'\,\-]+$/.test( this.sanitizedInputValue ) === true ) {

            return true;
        }

        return false;

    }

    isRequired() {

        if ( this.sanitizedInputValue !== '' ) {

            return true;
        }

        return false;

    }

    isNumeric() {

        if ( validator.isNumeric( this.sanitizedInputValue ) ) {

            return true;
        }

        return false;
    
    }

    isPositiveInteger() {

        return false;
        
    }
        
    isAlphanumericUnderscoreDash() {
            
        return false;
    }
        
    isTime() {
            
        return false;
    }

}


/* Validate Input 
 * 
 * @param options { object } - eg. { value: '1234', min: 10, max: 20 }
 */
function validateByRuleName( ruleName, options ) {

    let inputValue = util.setDefault( options.value, '' );
    let literalValidator = new LiteralValidator( inputValue );

    // console.log( 0, options, inputValue );

    if ( ruleName === NONE ) {

        return true;
    }
    else if ( ruleName === REQUIRED ) {

        return literalValidator.isRequired( inputValue );
    }
    else if ( ruleName === NUMERIC ) {

        return literalValidator.isNumeric( inputValue );
    }
    else if ( ruleName === ALPHA_SPACE ) {

        return literalValidator.isAlphaSpace( inputValue );
    }
    else if ( ruleName === ENGLISH_NAME ) {

        return literalValidator.isEnglishName( inputValue );
    }

}

export default {

    NONE,
    REQUIRED,
    NUMERIC,
    ALPHANUMERIC_UNDERSCORE_HYPHEN,
    POSITIVE_INTEGER,
    ALPHA_SPACE,
    ENGLISH_NAME,
    validateByRuleName
};