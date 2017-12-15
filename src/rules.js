import validator from 'validator';
import util from './util.js';
import rules from './datatype.js';

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

    if ( ruleName === rules.RULE_NONE ) {

        return true;
    }
    else if ( ruleName === rules.RULE_REQUIRED ) {

        return literalValidator.isRequired( inputValue );
    }
    else if ( ruleName === rules.RULE_NUMERIC ) {

        return literalValidator.isNumeric( inputValue );
    }
    else if ( ruleName === rules.RULE_ALPHA_SPACE ) {

        return literalValidator.isAlphaSpace( inputValue );
    }
    else if ( ruleName === rules.RULE_ENGLISH_NAME ) {

        return literalValidator.isEnglishName( inputValue );
    }

}

export default {

    validateByRuleName
};