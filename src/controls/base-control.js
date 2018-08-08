import React from 'react';
import validate from '../validate.js';
import util from '../util.js';
import { CONF } from '../conf.js';

class BaseControl extends React.Component {
    
    constructor( props ) {
        
        super( props );

        this.errors = [ 'Required' ];
        this.className = CONF.classNamePrefix;
        this.classNamePrefix = CONF.classNamePrefix;
    }

    renderMain() {

        return;
    }

    renderError() {

        if ( this.errors.length > 0 ) {

            return <div className={ this.className + '__error' }>Error</div>
        }
    }

    render() {

        return (

            <div className={ this.className }>
                { this.renderMain() }
                { this.renderError() }
            </div>
        )
    }
}

export default BaseControl;
