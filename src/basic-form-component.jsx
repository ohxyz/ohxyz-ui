import React from 'react';
import utils from './utils.js';

class BasicFormComponent extends React.Component {

    constructor( props ) {

        super( props );

        // Not UUID
        let randomString = Math.random().toString( 36 ).slice( 2 );
        
        // Passed from caller
        this.id = utils.setDefault( props.id, randomString );
        this.name = utils.setDefault( props.name, randomString );
        this.title = utils.setDefault( props.title, 'Form element' );
        this.description = utils.setDefault( props.description, '' );
        this.rules = utils.setDefault( props.rules, null );
        this.hint = utils.setDefault( props.hint, 'Hint text' );
        this.value = utils.setDefault( props.value, '' );

        this.className = '';

        this.isFocused = false;
        this.isFirstTimeFocused = true;
        this.isValid = true;
        this.isValidationRequired = this.rules === null ? false : true;
    }

    renderErrorMessageIfInvalid() {
        
        if ( this.isValid === false ) {

            return <span className="error-message">{ this.errorMessage }</span>
        }
        
        return null;
    }
    
    renderDescription() {

        if ( this.description === '' ) {

            return null;
        }
        
        return <div className="description">{ this.description }</div>
    }

}

export default BasicFormComponent;