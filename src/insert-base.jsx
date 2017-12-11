import React from 'react';
import rules from './rules.js';
import utils from './utils.js';

class InsertBase extends React.Component {
    
    constructor( props ) {
        
        super( props );

        this.handleKeyUp = this.handleKeyUp.bind( this );
        this.handleBlur = this.handleBlur.bind( this );

        this.id = utils.setDefault( props.id, utils.generateRandomString() );
        this.type = utils.setDefault( props.type, 'text' );
        this.name = utils.setDefault( props.name, '' );
        this.hint = utils.setDefault( props.hint, '' );
        this.value = utils.setDefault( props.value, '' );
        this.rules = utils.setDefault( props.rules, null );
        this.classNamePrefix = utils.setDefault( props.classNamePrefix, 'insert-text' );
        this.onError = utils.setDefault( props.onError, ( errorMessage ) => {} );

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

            let isValid = rules.validateByRuleName( rule.name, { value: this.value } );

            if ( isValid === false ) {

                this.isValid = false;
                this.errorMessage = rule.error;

                break;
            }
            else {

                this.isValid = true;
                this.errorMessage = '';

            }
        }

        // console.log( this.state, this.isValid );
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
