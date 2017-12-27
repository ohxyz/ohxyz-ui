import React from 'react';
import InsertText from '../controls/insert-text.jsx';
import ControlWrapper from './control-wrapper.jsx';

class InsertTextWrapper extends ControlWrapper {

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
                        onError={ this.handleError.bind( this ) }
            />
        );
    }
}

export default InsertTextWrapper;