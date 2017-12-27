import React from 'react';
import InsertTextArea from '../controls/insert-textarea.jsx';
import FormControl from './form-control.jsx';

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