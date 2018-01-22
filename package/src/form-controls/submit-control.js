import React from 'react';
import util from '../util.js';
import Submit from '../controls/submit.js';
import FormControl from './form-control.js';

class SubmitControl extends FormControl {

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

export default SubmitControl;