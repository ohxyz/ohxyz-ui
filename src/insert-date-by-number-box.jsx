import React from 'react';
import InsertDateByNumber from './insert-date-by-number.jsx';
import FormElementBox from './form-element-box.jsx';

class InsertDateByNumberBox extends FormElementBox {

    renderMain() {

        return (

            <InsertDateByNumber />
        );
    }
}

export default InsertDateByNumberBox;