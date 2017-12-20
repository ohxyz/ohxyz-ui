import React from 'react';
import InsertDateByText from '../elements/insert-date-by-text.jsx';
import FormElementWrapper from './form-element-wrapper.jsx';

class InsertDateByTextWrapper extends FormElementWrapper {

    renderMain() {

        return (

            <InsertDateByText name={ this.props.name } onError={ this.handleError.bind( this ) } />
        );
    }
}

export default InsertDateByTextWrapper;