import React from 'react';
import InsertNumber from './insert-number.jsx';
import FormElementBox from './form-element-box.jsx';

class InsertNumberBox extends FormElementBox {

    constructor( props ) {

        super( props );

        this.className = 'insert-number-box';
        this.classNamePrefix = 'insert-number-box';

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

export default InsertNumberBox;