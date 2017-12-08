import React from 'react';
import InsertTextArea from './insert-textarea.jsx';
import FormElementBox from './form-element-box.jsx';

class InsertTextAreaBox extends FormElementBox {

    constructor( props ) {

        super( props );

        this.className = 'insert-textarea-box';
        this.classNamePrefix = 'insert-textarea-box';

        this.isValid = true;

        this.state = {

            isValid: true,
            errorMessage: ''
        };

    }

    renderMain() {

        return (

            <InsertTextArea rules={ this.props.rules }
                            hint={ this.props.hint }
                            onError={ this.onError }
            />
        );
    }
}

export default InsertTextAreaBox;