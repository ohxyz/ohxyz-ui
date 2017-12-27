import React from 'react';
import util from '../util.js';
import Submit from '../controls/submit.jsx';
import FormControl from './form-control.jsx';

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