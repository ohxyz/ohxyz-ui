import React from 'react';
import BasicFormComponent from './basic-form-component.jsx';
import rules from './rules.js';
import utils from './utils.js';

class TextBox extends BasicFormComponent {
    
    constructor( props ) {
        
        super( props );

        this.handleKeyUp = this.handleKeyUp.bind( this );
        this.handleBlur = this.handleBlur.bind( this );

        this.inputElement = null;
        this.errorMessage = '';
        this.classNamePrefix = 'textbox';

        // input[type="text"] or textarea
        this.type = utils.setDefault( props.type, 'text' );

        this.makeInputElementId()
        this.makeClassName();

        this.state = {
            
            isFocused: this.isFocused,
            value: this.value,
            isValid: true,
            validationErrorMessage: ''
        };
    }

    makeInputElementId() {

        if ( this.type === 'text' ) {

            this.inputElementId = this.id + '-text';
        }
        else if ( this.type === 'number' ) {

            this.inputElementId = this.id + '-number'
        }
        else if ( this.type === 'textarea' ) {

            this.inputElementId = this.id + '-textarea';
        }
    }
    
    validateInputValue() {
        
        if ( Array.isArray( this.rules ) === false && this.rules.length === 0 ) {

            return;
        }

        for ( let i = 0; i < this.rules.length; i ++ ) {

            let rule = this.rules[ i ];
            // console.log( '888', rule, this.value );
            let isValid = rules.validateByRuleName( rule.name, { value: this.value } );

            if ( isValid === false ) {

                this.isValid = false;
                this.errorMessage = rule.error;

                this.setState( {

                    isValid: false,
                    validationErrorMessage: rule.error

                } );

                break;
            }
            else {

                this.isValid = true;
            }
        }

        // console.log( this.state, this.isValid );
    }


    handleBlur() {
        
        this.isFocused = false;
        this.isFirstTimeFocused = false;
        
        if ( this.isValidationRequired === true ) {
            
            this.validateInputValue( );
        }
        
        this.makeClassName();
        
        this.setState( {
            
            isFocused: false
            
        } ); 
    }
    
    handleKeyUp() {
        
        this.value = this.inputElement.value;

        // console.log( '***********', this.value );
        
        if ( this.isValidationRequired === true 
                && this.isFirstTimeFocused === false ) 
        {
            this.validateInputValue();
        }

        this.makeClassName();
        
        this.setState( {
            
            value: this.value
            
        } );
    }
    
    makeClassName() {
        
        this.className = this.classNamePrefix;
        
        if ( this.isFocused === true ) {
            
            this.className += ' is-focused';
        }

        if ( this.value !== '' ) {
            
            this.className += ' is-filled';
        }
        
        if ( this.isValid === false ) {
            
            this.className += ' is-invalid';
        }
    }

    renderInput( type ) {

        let inputClassName = this.classNamePrefix + '-' + type;

        return (

            <input id={ this.inputElementId }
                   type="text"
                   className={ inputClassName }
                   name={ this.name }
                   placeholder={ this.hint }
                   defaultValue={ this.value }
                   onBlur={ this.handleBlur }
                   onKeyUp={ this.handleKeyUp }
                   ref={ elem => this.inputElement = elem }
            />
        );

    }

    render() {
        
        return (
            <div className={ this.className } >
                { this.renderTitle() }
                { this.renderInput( this.type ) }
                { this.renderErrorMessageIfInvalid() }
                { this.renderDescription() }
            </div>
        );
    }
}

export default TextBox;
