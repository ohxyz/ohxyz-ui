import React from 'react';
import util from '../util.js';
import OptionsCheckboxList from '../controls/options-checkbox-list.js';
import FormControl from './form-control.js';

class OptionsCheckboxListControl extends FormControl {

    constructor( props ) {

        super( props );
        this.options = util.setDefault( props.options, [] );
    }

    renderMain() {

        return (

            <OptionsCheckboxList name={ this.name } options={ this.options } />
        );
    }
}

export default OptionsCheckboxListControl;