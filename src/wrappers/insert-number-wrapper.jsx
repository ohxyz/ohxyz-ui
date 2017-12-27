import React from 'react';
import InsertNumber from '../controls/insert-number.jsx';
import FormElementWrapper from './form-element-wrapper.jsx';

class InsertNumberWrapper extends FormElementWrapper {

    constructor( props ) {

        super( props );
        this.isValid = true;

        this.state = {

            isValid: true,
            errorMessage: ''
        };
    }

    renderMain() {

        return (

            <InsertNumber rules={ this.props.rules } 
                          hint={ this.props.hint }
                          onError={ this.onError } 
            />
        );
    }
}

export default InsertNumberWrapper;