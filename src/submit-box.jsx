import React from 'react';
import util from './util.js';
import Submit from './submit.jsx';
import FormElementBox from './form-element-box.jsx';

class SubmitBox extends FormElementBox {

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

export default SubmitBox;