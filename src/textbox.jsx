import React from 'react';
import validator from 'validator';
import BasicFormComponent from './basic-form-component.jsx';
import rules from './rules.js';
import utils from './utils.js';

class TextBox extends BasicFormComponent {
    
    constructor( props ) {
        
        super( props );

        this.handleKeyUp = this.handleKeyUp.bind( this );
        this.handleTextBoxClick = this.handleTextBoxClick.bind( this );
        this.handleBlur = this.handleBlur.bind( this );
        
        this.textBoxTitleElement = null;

        this.inputTextElement = null;
        
        this.errorMessage = '';
        this.inputTextElementId = this.id + '-input-text';
        this.classNamePrefix = 'textbox';


        this.makeClassName();

        this.state = {
            
            isFocused: this.isFocused,
            value: this.inputValue
        };
    }
    
    validateInputValue() {
        
        if ( Array.isArray( this.rules ) === false && this.rules.length === 0 ) {

            return;
        }

        for ( let i = 0; i < this.rules.length; i ++ ) {

            let rule = this.rules[ i ];
            console.log( '888', rule, this.inputValue );
            let isValid = rules.validateByRuleName( rule.name, { value: this.inputValue } );

            if ( isValid === false ) {

                this.isInputValueValid = false;
                this.errorMessage = rule.error;

                this.setState( {

                    isInputValueValid: false,
                    validationErrorMessage: rule.error

                } );

                break;
            }
            else {

                this.isInputValueValid = true;
            }
        }

        // console.log( this.state, this.isInputValueValid );
    }


    handleBlur() {
        
        this.isFocused = false;
        this.firstTimeFocused = false;
        
        if ( this.requireValidation === true ) {
            
            this.validateInputValue( );
        }
        
        this.makeClassName();
        
        this.setState( {
            
            isFocused: false
            
        } ); 
    }
    
    handleKeyUp() {
        
        this.inputValue = this.inputTextElement.value;

        // console.log( '***********', this.inputValue );
        
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
        
        let className = 'error-message';
        
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

        if ( this.description === '' ) {

            return;
        }

        
        return <div className="description">{ this.description }</div>
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
                       onKeyUp={ this.handleKeyUp }
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

export default TextBox;
