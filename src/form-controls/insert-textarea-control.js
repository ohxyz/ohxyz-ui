import React from 'react';
import InsertTextArea from '../controls/insert-textarea.js';
import FormControl from './form-control.js';

class InsertTextAreaControl extends FormControl {

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

            <InsertTextArea rules={ this.props.rules }
                            hint={ this.props.hint }
                            onError={ this.handleError.bind( this ) }
            />
        );
    }
}

export default InsertTextAreaControl;