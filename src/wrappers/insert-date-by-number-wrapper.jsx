import React from 'react';
import InsertDateByNumber from '../controls/insert-date-by-number.jsx';
import FormElementWrapper from './form-element-wrapper.jsx';

class InsertDateByNumberWrapper extends FormElementWrapper {

    renderMain() {

        return (

            <InsertDateByNumber />
        );
    }
}

export default InsertDateByNumberWrapper;