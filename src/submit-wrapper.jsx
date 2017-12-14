import React from 'react';
import util from './util.js';
import Submit from './submit.jsx';
import FormElementWrapper from './form-element-wrapper.jsx';

class SubmitWrapper extends FormElementWrapper {

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