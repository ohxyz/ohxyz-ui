import React from 'react';
import validate from '../validate.js';
import util from '../util.js';

class InsertBase extends React.Component {
    
    constructor( props ) {
        
        super( props );

        this.handleKeyUp = this.handleKeyUp.bind( this );
        this.handleBlur = this.handleBlur.bind( this );

        this.id = util.setDefault( props.id, util.generateRandomString() );
        this.type = util.setDefault( props.type, 'text' );
        this.name = util.setDefault( props.name, '' );
        this.hint = util.setDefault( props.hint, '' );
        this.value = util.setDefault( props.value, '' );
        this.rules = util.setDefault( props.rules, [] );
        this.classNamePrefix = util.setDefault( props.classNamePrefix, 'insert-text' );
        this.onError = util.setDefault( props.onError, ( errorMessage ) => {} );

        this.inputElement = null;
    }

    isValidationRequired() {

        if ( Array.isArray( this.rules ) === true && this.rules.length > 0 ) {

            return true;
        }

        return false;
    }
    
    validateInputValue() {

        for ( let i = 0; i < this.rules.length; i ++ ) {

            let rule = this.rules[ i ];

            let ruleObject = Object.assign( {

                name: rule.name,
                value: this.value

            }, rule.meta );
            
            let isValid = validate.validateByRule( ruleObject );

            if ( isValid === false ) {

                this.isValid = false;
                this.errorMessage = rule.meta.error;

                break;
            }
            else {

                this.isValid = true;
                this.errorMessage = '';

            }
        }
    }


    handleBlur() {
        
        if ( this.isValidationRequired() === true ) {
            
            this.validateInputValue();
            this.onError( this.errorMessage );
        }

    }
    
    handleKeyUp() {
        
        this.value = this.inputElement.value;
        
        if ( this.isValidationRequired() === true ) {

            this.validateInputValue();
            this.onError( this.errorMessage );
        }

        // console.log( 0, this.errorMessage );
    }
    
    makeClassName() {

        this.className = this.classNamePrefix;

        if ( this.value !== '' ) {
            
            this.className += ' is-filled';
        }
        
        if ( this.isValid === false ) {
            
            this.className += ' is-invalid';
        }
    }

    renderInput() {

        return (

            <input id={ this.id }
                   className={ this.className }
                   type={ this.type }
                   name={ this.name }
                   defaultValue={ this.value }
                   placeholder={ this.hint }
                   onBlur={ this.handleBlur }
                   onKeyUp={ this.handleKeyUp }
                   ref={ elem => this.inputElement = elem }
            />
        );
    }

    render() {

        this.makeClassName();
        return this.renderInput();
    }

}

export default InsertBase;
