import React from 'react';
import InsertText from './insert-text.jsx';
import InsertDateBase from './insert-date-base.jsx';
import utils from './utils.js';

// Todo: allow to set min and max for dates
class InsertDateByText extends InsertDateBase {

    constructor( props ) {

        super( props );
        this.classNamePrefix = 'insert-date-by-text';
    }

    renderMain() {

        let insertTextClassNamePrefix = this.classNamePrefix + '-insert-text';

        return (

            <div className={ this.classNamePrefix }>
                <InsertText
                    classNamePrefix={ insertTextClassNamePrefix }
                    hint="DD"
                />
                { this.renderDelimiter() }
                <InsertText
                    classNamePrefix={ insertTextClassNamePrefix }
                    hint="MM"
                />
                { this.renderDelimiter() }
                <InsertText
                    classNamePrefix={ insertTextClassNamePrefix }
                    hint="YYYY"
                />
            </div>
        );
    }
}

export default InsertDateByText;