import React from 'react';
import InsertNumber from './insert-number.js';
import InsertDateBase from './insert-date-base.js';

// Todo: allow to set min and max for dates
class InsertDateByNumber extends InsertDateBase {

    constructor(props) {

        super(props);
        this.classNamePrefix = 'insert-date-by-number';
    }

    render() {

        let insertTextClassNamePrefix = this.classNamePrefix + '-insert-number';

        return React.createElement(
            'div',
            { className: this.classNamePrefix },
            this.renderHiddenInput(),
            React.createElement(InsertNumber, {
                classNamePrefix: insertTextClassNamePrefix,
                hint: 'DD'
            }),
            this.renderDelimiter(),
            React.createElement(InsertNumber, {
                classNamePrefix: insertTextClassNamePrefix,
                hint: 'MM'
            }),
            this.renderDelimiter(),
            React.createElement(InsertNumber, {
                classNamePrefix: insertTextClassNamePrefix,
                hint: 'YYYY'
            })
        );
    }
}

export default InsertDateByNumber;