import React from 'react';
import InsertText from './insert-text.js';
import util from '../util.js';

// Todo: allow to set min and max for dates
class InsertDateBase extends InsertText {

    constructor(props) {

        super(props);

        this.classNamePrefix = 'insert-date-base';
        this.hint = util.setDefault(props.hint, 'DD/MM/YYYY');
        this.name = util.setDefault(props.name, '');
        this.value = util.setDefault(props.value, '');
        this.errorMessage = '';
    }

    // Reserve for subclass
    renderHiddenInput() {

        return React.createElement('input', { type: 'hidden', name: this.name, value: this.value });
    }

    // Reserve for subclass
    renderDelimiter() {

        return React.createElement(
            'span',
            { className: this.classNamePrefix + '-delimiter' },
            '/'
        );
    }

    renderInput() {

        return React.createElement(InsertText, { classNamePrefix: this.classNamePrefix, hint: this.hint });
    }

}

export default InsertDateBase;