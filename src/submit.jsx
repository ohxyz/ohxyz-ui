import React from 'react';
import util from './util.js';

class Submit extends React.Component {

    constructor( props ) {

        super( props );

        this.text = util.setDefault( props.text, 'Submit' );
        this.name = util.setDefault( props.name, '' );
        this.id = util.setDefault( props.id, util.generateRandomString() );

        this.classNamePrefix = 'submit';
        this.className = '';
    }

    makeClassName() {

        this.className = this.classNamePrefix;
    }

    render() {

        this.makeClassName();

        return (

            <input type="submit" 
                   name={ this.name }
                   className={ this.className }
                   value={ this.text }
            />
        )

    }
}

export default Submit;