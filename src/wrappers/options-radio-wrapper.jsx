import React from 'react';
import OptionsRadio from '../controls/options-radio.jsx';
import FormElementWrapper from './form-element-wrapper.jsx';
import util from '../util.js';

class OptionsRadioWrapper extends FormElementWrapper {

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

export default OptionsRadioWrapper;