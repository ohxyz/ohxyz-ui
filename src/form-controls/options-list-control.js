import React from 'react';
import util from '../util.js';
import OptionsList from '../controls/options-list.js';
import FormControl from './form-control.js';

class OptionsListControl extends FormControl {

    constructor( props ) {

        super( props );
        this.options = util.setDefault( props.options, [] );
    }

    renderMain() {

        return (

            <OptionsList options={ this.options } />
        );
    }
}

export default OptionsListControl;