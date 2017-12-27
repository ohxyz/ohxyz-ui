import React from 'react';
import util from '../util.js';
import OptionsRadio from '../controls/options-radio.jsx';
import FormControl from './form-control.jsx';

class OptionsRadioControl extends FormControl {

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

export default OptionsRadioControl;