import React from 'react';
import util from '../util.js';
import OptionsRadioList from '../controls/options-radio-list.js';
import FormControl from './form-control.js';

class OptionsRadioListControl extends FormControl {

    constructor( props ) {

        super( props );
        this.options = util.setDefault( props.options, [] );
    }

    renderMain() {

        return (

            <OptionsRadioList name={ this.name } options={ this.options } />
        );
    }
}

export default OptionsRadioListControl;