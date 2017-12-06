import React from 'react';
import utils from './utils.js';

const DEFAULT_DESCRIPTION = 
    <div>This is the default description text. It should be set to <em>empty</em> string when the code is shipped.</div>

class BasicFormComponent extends React.Component {

    constructor( props ) {

        super( props );

        // Not UUID
        let randomString = Math.random().toString( 36 ).slice( 2 );
        
        // Passed from caller
        this.id = utils.setDefault( props.id, randomString );
        this.name = utils.setDefault( props.name, randomString );
        this.title = utils.setDefault( props.title, 'Form element' );
        this.description = utils.setDefault( props.description, DEFAULT_DESCRIPTION );
        this.rules = utils.setDefault( props.rules, null );
        this.hint = utils.setDefault( props.hint, 'Hint text' );
        this.value = utils.setDefault( props.value, '' );

        this.domElement = null;

        this.className = '';
        this.classNamePrefix = '';

        this.isFocused = false;
        this.isFirstTimeFocused = true;

        this.isValid = true;
        this.isValidationRequired = this.rules === null ? false : true;
    }

    renderHiddenInput() {

        return null;
    }

    renderTitle() {

        let className = this.classNamePrefix + '-title';

        return <label className={ className }>{ this.title }</label>
    }

    renderMain() {

        return null;
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


    render() {

        return (

            <div className={ this.className } ref={ elem => this.domElement = elem } >
                { this.renderHiddenInput() }
                { this.renderTitle() }
                { this.renderMain() }
                { this.renderErrorMessageIfInvalid() }
                { this.renderDescription() }
            </div>
        );
    }

}

export default BasicFormComponent;