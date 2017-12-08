import React from 'react';
import utils from './utils.js';

class FormElementBox extends React.Component {

    constructor( props ) {

        super( props );

        this.onError = this.handleError.bind( this );
        
        this.className = 'form-element-box';
        this.classNamePrefix = 'form-element-box';
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

        let className = this.classNamePrefix + '-title';
        return <span className={ className }>{ this.title }</span>
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
                { this.renderTitle() }
                { this.renderMain() }
                { this.renderErrorMessageIfInvalid() }
                { this.renderDescription() }
            </div>
        );
    }
}


export default FormElementBox;