import React from 'react';
import validator from 'validator';

const utils = require( './utils.js' );

const RULE_EMPTY = '';
const RULE_NUMERIC = 'numeric';
const RULE_ALPHANUMERIC_UNDERSCORE_DASH = 'alphanumeric-underscore-dash';
const RULE_POSITIVE_INTEGER = 'positive-integer';
const RULE_TIME = 'time';

class TextBox extends React.Component {
    
    constructor( props ) {
        
        super( props );

        this.handleTyping = this.handleTyping.bind( this );
        this.handleTextBoxClick = this.handleTextBoxClick.bind( this );
        this.handleBlur = this.handleBlur.bind( this );
        
        this.className = '';
        this.textBoxTitleElement = null;
        this.isFocused = false;
        this.inputTextElement = null;

        // Not UUID
        let randomString = Math.random().toString( 36 ).slice( 2 );
        
        this.id = utils.setDefault( props.id, randomString );
        this.name = utils.setDefault( props.name, randomString );
        this.title = utils.setDefault( props.title, 'Fill in here' );
        this.inputValue = utils.setDefault( props.value, '' );

        this.inputTextElementId = this.id + '-input-text';
        this.classNamePrefix = 'textbox';

        this.isInputValueValid = true;
        this.allowEmpty = true;
        this.firstTimeFocused = true;
        this.isErrorMessageDefined = false;
        
        if ( props.error === undefined ) {
            
            this.errorMessage = 'Error !';
            this.isErrorMessageDefined = false;
        }
        else {
            
            this.errorMessage = props.error;
            this.isErrorMessageDefined = true;
        }
        
        this.requireValidation = props.rule === undefined
            ? false
            : true;
        
        this.validationRule = null;

        if ( this.requireValidation === true ) {
            
            let rule = {
            
                name: utils.setDefault( props.rule.name, RULE_EMPTY ),
                minLength: utils.setDefault( props.rule.min, null ),
                maxLength: utils.setDefault( props.rule.max, null )
            };
            
            this.validationRule = rule;
        }

        this.makeClassName();

        this.state = {
            
            isFocused: this.isFocused,
            value: this.inputValue
        };
        
    }
    
    validateInputValue() {
        
        let rule = this.validationRule.name;
        
        if ( this.allowEmpty === true && this.inputValue === '' ) {
            
            this.isInputValueValid = true;
        }
        else if ( rule === RULE_EMPTY ) {
            
            this.isInputValueValid = true;
        }
        else if ( rule === RULE_POSITIVE_INTEGER ) {
            
            this.validatePositiveInteger();
        }
        else if ( rule === RULE_NUMERIC ) {
            
            this.validateNumeric();
        }
        else if ( rule === RULE_ALPHANUMERIC_UNDERSCORE_DASH ) {

            this.validateAlphanumericUnderscoreDash();
        }
        else if ( rule === RULE_TIME ) {
            
            this.validateTime();
        }

    }
    
    validateNumeric() {
        
        let rule = this.validationRule;
        let sanitizedInputValue = this.inputValue.replace( /\s/g, '');
        let isValid = validator.isNumeric( sanitizedInputValue );

        if ( isValid === true ) {
            
            isValid = ( rule.minLength !== null && sanitizedInputValue.length >= rule.minLength );
        }

        if ( isValid === true ) {
            
            isValid = ( rule.maxLength !== null && sanitizedInputValue.length <= rule.maxLength );
        }

        if ( isValid === true ) {
            
            this.isInputValueValid = true;
        }
        else {
            
            this.isInputValueValid = false;

            let lengthLiteral = ( rule.minLength !== null && rule.minLength === rule.maxLength )
                ? rule.minLength.toString()
                : rule.minLength + ' to ' + rule.maxLength;
        
            this.errorMessage = this.isErrorMessageDefined === true
                ? this.errorMessage
                : lengthLiteral + ' digits only';
        }
    }

    validatePositiveInteger() {
        
        let sanitizedInputValue = this.inputValue.replace( /\s/g, '');
        
        let isInteger = validator.isInt( sanitizedInputValue, { min: 0 } )
        
        if ( isInteger === true
                && parseInt( sanitizedInputValue, 10 ) > 0 )
        {
            this.isInputValueValid = true;
        }
        else {
            
            this.isInputValueValid = false;
            this.errorMessage = this.isErrorMessageDefined === true
                ? this.errorMessage
                : 'Positive number only';
        }
    }
    
    validateAlphanumericUnderscoreDash() {
        
        let trimmedInputValue = this.inputValue.trim();
        let regex = /^[a-zA-Z0-9_-]+$/;
        
        if ( regex.test( trimmedInputValue ) === true ) {
            
            this.isInputValueValid = true;
        }
        else {
            
            this.isInputValueValid = false;
            this.errorMessage = this.isErrorMessageDefined === true
                ? this.errorMessage
                : 'Letters, numbers, - or _ ';
        }
    }
    
    validateTime() {
        
        let trimmedTime = this.inputValue.replace( /\s/g, '');
        let regex = /^([0-1][0-9]|2[0-3])(:|\.)([0-5][0-9])$/;
        let isValid = false;

        isValid = ( trimmedTime.length === 5 );
        isValid = regex.test( trimmedTime );
        
        if ( isValid === true ) {
            
            this.isInputValueValid = true;
        }
        else {
            
            this.isInputValueValid = false;
            this.errorMessage = this.isErrorMessageDefined === true
                ? this.errorMessage
                : 'HH.mm eg. 23.01';
        }
    }

    handleBlur() {
        
        this.isFocused = false;
        this.firstTimeFocused = false;
        
        if ( this.requireValidation === true ) {
            
            this.validateInputValue();
        }
        
        this.makeClassName();
        
        this.setState( {
            
            isFocused: false
            
        } ); 
    }
    
    handleTyping( ) {
        
        this.inputValue = this.inputTextElement.value;
        
        if ( this.requireValidation === true 
                && this.firstTimeFocused === false ) 
        {
            this.validateInputValue();
        }

        this.makeClassName();
        
        if ( this.props.onChange !== undefined ) {
            
            this.props.onChange( this.inputTextElement );
        }
        
        this.setState( {
            
            value: this.inputValue
            
        } );
    }
    
    makeClassName() {
        
        this.className = this.classNamePrefix;
        
        if ( this.isFocused === true ) {
            
            this.className += ' is-focused';
        }

        if ( this.inputValue !== '' ) {
            
            this.className += ' is-filled';
        }
        
        if ( this.isInputValueValid === false ) {
            
            this.className += ' is-invalid';
        }
    }
    
    handleTextBoxClick( event ) {
        
        let target = event.target;
        
        if ( target === this.textBoxTitleElement ) {
            
            return ;
        }
        
        if ( this.isFocused === false ) {
            
            this.isFocused = true;
        }

        this.makeClassName();

        this.setState( { 
        
            isFocused: this.isFocused
            
        } );
        
    }
    
    renderErrorMessageIfInvalid() {
        
        let className = this.classNamePrefix + '-error-message';
        
        if ( this.isInputValueValid === false ) {

            return (
            
                <span className={ className }>
                    { this.errorMessage }
                </span>
            )
        }
        
        return '';
    }
    
    renderDescription() {
        
        return '';
    }

    render() {
        
        let labelClassName = this.classNamePrefix + '-title';
        let inputClassName = this.classNamePrefix + '-input-text';

        return (
            <div className={ this.className } 
                 onClick={ this.handleTextBoxClick }
            >
                <label htmlFor={ this.inputTextElementId } 
                       className={ labelClassName }
                       ref={ elem => this.textBoxTitleElement = elem }
                >
                    { this.title }    
                </label>
                <input id={ this.inputTextElementId }
                       type="text"
                       className={ inputClassName }
                       name={ this.name }
                       defaultValue={ this.inputValue }
                       onFocus={ this.handleFocus }
                       onBlur={ this.handleBlur }
                       onChange={ this.handleTyping }
                       ref={ elem => this.inputTextElement = elem }
                />
                { this.renderErrorMessageIfInvalid() }
                { this.renderDescription() }
            </div>
        );
    }
    
    componentDidUpdate() {
    
        if ( this.isFocused === true ) {
            
            this.inputTextElement.focus();
        }
        
    }
}

export { TextBox };