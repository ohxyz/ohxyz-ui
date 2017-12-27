import React from 'react';
import InsertTextArea from '../controls/insert-textarea.jsx';
import ControlWrapper from './control-wrapper.jsx';

class InsertTextAreaWrapper extends ControlWrapper {

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

export default InsertTextAreaWrapper;