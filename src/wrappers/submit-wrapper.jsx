import React from 'react';
import util from '../util.js';
import Submit from '../controls/submit.jsx';
import ControlWrapper from './control-wrapper.jsx';

class SubmitWrapper extends ControlWrapper {

    constructor( props ) {

        super( props );

        this.text = util.setDefault( props.text, 'Submit' );
    }

    renderMain() {

        return (

            <Submit text={ this.text } name={ this.name } />
        );
    }
}

export default SubmitWrapper;