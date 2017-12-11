import React from 'react';
import InsertDateByText from './insert-date-by-text.jsx';
import FormElementBox from './form-element-box.jsx';

class InsertDateByTextBox extends FormElementBox {

    constructor( props ) {

        super( props );

        this.className = 'insert-date-by-text-box';
        this.classNamePrefix = 'insert-date-by-text-box';
    }

    renderMain() {

        return (

            <InsertDateByText />
        );
    }
}

export default InsertDateByTextBox;