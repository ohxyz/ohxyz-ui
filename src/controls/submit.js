import React from 'react';
import util from '../util.js';

class Submit extends React.Component {

    constructor( props ) {

        super( props );

        this.text = util.setDefault( props.text, 'Submit' );
        this.name = util.setDefault( props.name, '' );
        this.id = util.setDefault( props.id, util.generateRandomString() );
        this.disabled = util.setDefault( props.disabled, false );

        this.classNamePrefix = 'submit';
        this.className = '';
    }

    makeClassName() {

        this.className = this.classNamePrefix;
    }

    makeDisabled() {

        if ( this.disabled === 'true' || this.disabled === true ) {

            this.disabled = "disabled";
        }
    }

    render() {

        this.makeClassName();
        this.makeDisabled();

        return (

            <input type="submit" 
                   name={ this.name }
                   className={ this.className }
                   value={ this.text }
                   disabled={ this.disabled }
            />
        )
    }
}

export default Submit;