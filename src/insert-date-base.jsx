import React from 'react';
import InsertText from './insert-text.jsx';
import utils from './utils.js';

// Todo: allow to set min and max for dates
class InsertDateBase extends React.Component {

    constructor( props ) {

        super( props );

        this.classNamePrefix = 'insert-date-base';
        this.hint = utils.setDefault( props.hint, '' );
        this.name = utils.setDefault( props.name, '' );
        this.value = utils.setDefault( props.value, '' );

    }

    renderHiddenInput() {

        return <input type="hidden" name={ this.name } value={ this.value } />;
    }

    // Reserve for subclass
    renderDelimiter() {

        return <span className={ this.classNamePrefix + '-delimiter' }>&#47;</span>;
    }

    render() {

        let insertTextClassNamePrefix = this.classNamePrefix + '-insert-text';

        return (

            <InsertText classNamePrefix={ insertTextClassNamePrefix }
                        hint={ this.hint }
            />
        );
    }

}

export default InsertDateBase;