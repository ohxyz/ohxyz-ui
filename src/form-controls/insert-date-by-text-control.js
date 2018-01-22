import React from 'react';
import InsertDateByText from '../controls/insert-date-by-text.js';
import FormControl from './form-control.js';

class InsertDateByTextControl extends FormControl {

    renderMain() {

        return (

            <InsertDateByText name={ this.props.name } onError={ this.handleError.bind( this ) } />
        );
    }
}

export default InsertDateByTextControl;