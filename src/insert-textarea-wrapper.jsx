import React from 'react';
import InsertTextArea from './insert-textarea.jsx';
import FormElementWrapper from './form-element-wrapper.jsx';

class InsertTextAreaWrapper extends FormElementWrapper {

    constructor( props ) {

        super( props );

        this.className = 'insert-textarea-wrapper';
        this.classNamePrefix = 'insert-textarea-wrapper';

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

export default InsertTextAreaWrapper;