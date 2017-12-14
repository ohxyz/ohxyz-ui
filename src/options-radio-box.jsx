import React from 'react';
import OptionsRadio from './options-radio.jsx';
import FormElementBox from './form-element-box.jsx';
import util from './util.js';

class OptionsRadioBox extends FormElementBox {

    constructor( props ) {

        super( props );
        this.items = util.setDefault( props.items, [] );
    }

    renderMain() {

        return (

            <OptionsRadio name={ this.name } items={ this.items } />
        );
    }
}

export default OptionsRadioBox;