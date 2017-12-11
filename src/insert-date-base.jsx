import React from 'react';
import InsertText from './insert-text.jsx';
import utils from './utils.js';

// Todo: allow to set min and max for dates
class InsertDateBase extends React.Component {

    constructor( props ) {

        super( props );

        this.classNamePrefix = 'insert-date-base';
        this.hint = utils.setDefault( props.hint, '' );
    }

    renderHiddenInput() {

        return null;
    }

    // Reserve for subclass
    renderDelimiter() {

        return <span className={ this.classNamePrefix + '-delimiter' }>&#47;</span>;
    }

    renderMain() {

        let insertTextClassNamePrefix = this.classNamePrefix + '-insert-text';

        return (

            <InsertText classNamePrefix={ insertTextClassNamePrefix }
                        hint={ this.hint }
            />
        );
    }

    render() {

        return (
            
            <div className={ this.className } >
                { this.renderHiddenInput() }
                { this.renderMain() }
            </div>

        );
    }

}

export default InsertDateBase;