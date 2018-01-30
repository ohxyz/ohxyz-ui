import React from 'react';
import util from '../util.js';
import conf from '../conf.js';

class FormControl extends React.Component {

    constructor( props ) {

        super( props );

        this.domElement = null;

        this.title = util.setDefault( props.title, '' );
        this.subtitle = util.setDefault( props.subtitle, '' );
        this.info = util.setDefault( props.info, '' );
        this.errorMessage = util.setDefault( props.errorMessage, '' );
        this.name = util.setDefault( props.name, '' );
        this.rules = util.setDefault( props.rules, [] );

        this.isValid= util.setDefault( props.isValid, true );

        this.classNamePrefix = conf.classNamePrefix;
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

    }

    makeClassName() {

        this.className = this.classNamePrefix;

        if ( this.isValid === false ) {

            this.className += ` ${ this.classNamePrefix }--invalid`;
        }

    }

    renderTitle() {

        if ( this.title === '' ) {

            return null;
        }

        return <div className={ this.classNamePrefix + '__title' }>{ this.title }</div>
    }

    renderSubtitle() {

        if ( this.subtitle === '' ) {

            return null;
        }

        return <div className={ this.classNamePrefix + '__subtitle' }>{ this.subtitle }</div>
    }

    renderMain() {

        return null;
    }

    renderErrorMessageIfInvalid() {
        
        if ( this.isValid === false ) {

            return <span className={ this.classNamePrefix + '__error' }>{ this.errorMessage }</span>
        }
        
        return null;
    }

    renderInformation() {

        if ( this.info === '' ) {

            return null;
        }
        
        return <div className={ this.classNamePrefix + '__information' }>{ this.info }</div>
    }

    // Todo: Check event.target
    updateUI( event ) {

        this.forceUpdate();
    }

    render() {

        this.makeClassName();

        return (

            <div
                className={ this.className } 
                ref={ elem => this.domElement = elem }
                onChange={ this.updateUI.bind( this ) }
            >
                { this.renderTitle() }
                { this.renderSubtitle() }
                { this.renderMain() }
                { this.renderErrorMessageIfInvalid() }
                { this.renderInformation() }
            </div>
        );
    }
}


export default FormControl;