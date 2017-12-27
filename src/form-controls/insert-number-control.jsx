import React from 'react';
import InsertNumber from '../controls/insert-number.jsx';
import FormControl from './form-control.jsx';

class InsertNumberControl extends FormControl {

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

export default InsertNumberControl;