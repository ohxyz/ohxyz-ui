import React from 'react';
import InsertText from './insert-text.jsx';
import FormElementBox from './form-element-box.jsx';

class InsertTextBox extends FormElementBox {

    constructor( props ) {

        super( props );

        this.className = 'insert-text-box';
        this.classNamePrefix = 'insert-text-box';

        this.isValid = true;

        this.state = {

            isValid: true,
            errorMessage: ''
        };

    }

    renderMain() {

        return (

            <InsertText rules={ this.props.rules }
                        hint={ this.props.hint }
                        onError={ this.onError }
            />
        );
    }
}

export default InsertTextBox;