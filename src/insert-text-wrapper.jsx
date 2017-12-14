import React from 'react';
import InsertText from './insert-text.jsx';
import FormElementWrapper from './form-element-wrapper.jsx';

class InsertTextWrapper extends FormElementWrapper {

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

            <InsertText rules={ this.props.rules }
                        hint={ this.props.hint }
                        onError={ this.onError }
            />
        );
    }
}

export default InsertTextWrapper;