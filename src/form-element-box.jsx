import React from 'react';
import utils from './utils.js';

class FormElementBox extends React.Component {

    constructor( props ) {

        super( props );

        this.onError = this.handleError.bind( this );
        this.domElement = null;

        this.title = utils.setDefault( props.title, '' );
        this.description = utils.setDefault( props.description, '' );
        this.errorMessage = utils.setDefault( props.errorMessage, '' );
        this.isValid= utils.setDefault( props.isValid, true );
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

    renderTitle() {

        if ( this.title === '' ) {

            return null;
        }

        return <span className="title-box">{ this.title }</span>
    }

    renderMain() {

        return null;
    }

    renderErrorMessageIfInvalid() {
        
        if ( this.isValid === false ) {

            return <span className="error-message-box">{ this.errorMessage }</span>
        }
        
        return null;
    }

    renderDescription() {

        if ( this.description === '' ) {

            return null;
        }
        
        return <div className="description-box">{ this.description }</div>
    }

    render() {

        return (

            <div className="form-element-box" ref={ elem => this.domElement = elem } >
                { this.renderTitle() }
                { this.renderMain() }
                { this.renderErrorMessageIfInvalid() }
                { this.renderDescription() }
            </div>
        );
    }
}


export default FormElementBox;