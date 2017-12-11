import React from 'react';
import InsertNumber from './insert-number.jsx';
import InsertDateBase from './insert-date-base.jsx';
import utils from './utils.js';

// Todo: allow to set min and max for dates
class InsertDateByText extends InsertDateBase {

    constructor( props ) {

        super( props );
        this.classNamePrefix = 'insert-date-by-number';
    }

    renderMain() {

        let insertTextClassNamePrefix = this.classNamePrefix + '-insert-number';

        return (

            <div className={ this.classNamePrefix }>
                <InsertNumber
                    classNamePrefix={ insertTextClassNamePrefix }
                    hint="DD"
                />
                { this.renderDelimiter() }
                <InsertNumber
                    classNamePrefix={ insertTextClassNamePrefix }
                    hint="MM"
                />
                { this.renderDelimiter() }
                <InsertNumber
                    classNamePrefix={ insertTextClassNamePrefix }
                    hint="YYYY"
                />
            </div>
        );
    }
}

export default InsertDateByText;