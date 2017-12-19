import React from 'react';
import util from '../util.js';

class FormElementWrapper extends React.Component {

    constructor( props ) {

        super( props );

        this.onError = this.handleError.bind( this );
        this.domElement = null;

        this.title = util.setDefault( props.title, '' );
        this.description = util.setDefault( props.description, '' );
        this.errorMessage = util.setDefault( props.errorMessage, '' );
        this.name = util.setDefault( props.name, '' );

        this.isValid= util.setDefault( props.isValid, true );
        this.requiredMessage = util.setDefault( props.requiredMessage, '' );

        this.classNamePrefix = 'form-element-wrapper';
        this.className = '';
    }

    handleError( errorMessage ) {

        if ( errorMessage === '' ) {

            this.isValid = true;
            this.errorMessage = '';

        }
        else {

            this.isValid = false;
            this.errorMessage = errorMessage;
        }

        this.setState( {

            isValid: this.isValid,
            errorMessage: this.errorMessage

        } );

    }

    makeClassName() {

        this.className = this.classNamePrefix;

        if ( this.isValid === false ) {

            this.className += ' is-invalid';
        }

    }

    renderTitle() {

        if ( this.title === '' ) {

            return null;
        }

        return <span className="title">{ this.title }</span>
    }

    renderMain() {

        return null;
    }

    renderRequiredMessageIfRequired() {

        if ( this.requiredMessage !== '' ) {

            return <span class="is-required">{ this.requiredMessage }</span>
        }
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

        this.makeClassName();

        return (

            <div className={ this.className } ref={ elem => this.domElement = elem } >
                { this.renderTitle() }
                { this.renderRequiredMessageIfRequired() }
                { this.renderMain() }
                { this.renderErrorMessageIfInvalid() }
                { this.renderDescription() }
            </div>
        );
    }
}


export default FormElementWrapper;