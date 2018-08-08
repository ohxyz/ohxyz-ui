import React from 'react';
import validate from '../validate.js';
import util from '../util.js';
import BaseControl from './base-control.js';
import { CONF } from '../conf.js';

class InsertBase extends BaseControl {
    
    constructor( props ) {
        
        super( props );

        this.id                 = util.setDefault( props.id, util.generateRandomString() );
        this.type               = util.setDefault( props.type, 'text' );
        this.name               = util.setDefault( props.name, '' );
        this.placeholder        = util.setDefault( props.placeholder, '' );
        this.value              = util.setDefault( props.value, '' );
        this.rules              = util.setDefault( props.rules, [] );
        this.classNamePrefix    = util.setDefault( props.classNamePrefix, CONF.insertClassNamePrefix );

        this.onPropsError       = util.setDefault( props.onError, ( errorMessage ) => {} );
        this.onPropsBlur        = util.setDefault( props.onBlur, ( event ) => {} );
        this.onPropsChange      = util.setDefault( props.onChange, ( event ) => {} );

        this.domElement         = null;
        this.className          = this.classNamePrefix 
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


    handleBlur( event ) {
        
        if ( this.isValidationRequired() === true ) {
            
            this.validateInputValue();
            this.onPropsError( this.errorMessage );
        }


        this.onPropsBlur( event );

    }
    
    handleChange( event ) {
        
        this.value = this.domElement.value;
        
        if ( this.isValidationRequired() === true ) {

            this.validateInputValue();
            this.onPropsError( this.errorMessage );
        }

        this.onPropsChange( event );
    }
    
    makeClassName() {

        if ( this.value !== '' ) {
            
            this.className += ' ' + this.classNamePrefix + '--filled';
        }
        
        if ( this.isValid === false ) {
            
            this.className += ' ' + this.classNamePrefix + '--invalid';
        }
    }

    renderMain() {

        this.makeClassName();

        return (

            <input id={ this.id }
                   className={ `${this.className}__${this.type}` }
                   type={ this.type }
                   name={ this.name }
                   defaultValue={ this.value }
                   placeholder={ this.placeholder }
                   onBlur={ this.handleBlur.bind( this ) }
                   onChange={ this.handleChange.bind( this ) }
                   ref={ elem => this.domElement = elem }
            />
        );
    }

}

export default InsertBase;
