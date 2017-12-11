import React from 'react';
import InsertDateByNumber from './insert-date-by-number.jsx';
import FormElementBox from './form-element-box.jsx';

class InsertDateByNumberBox extends FormElementBox {

    constructor( props ) {

        super( props );

        this.className = 'insert-date-by-number-box';
        this.classNamePrefix = 'insert-date-by-number-box';
    }

    renderMain() {

        return (

            <InsertDateByNumber />
        );
    }
}

export default InsertDateByNumberBox;