import React from 'react';
import InsertDateByText from './insert-date-by-text.jsx';
import FormElementWrapper from './form-element-wrapper.jsx';

class InsertDateByTextWrapper extends FormElementWrapper {

    renderMain() {

        return (

            <InsertDateByText />
        );
    }
}

export default InsertDateByTextWrapper;