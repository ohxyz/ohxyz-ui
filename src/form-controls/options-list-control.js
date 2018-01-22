import React from 'react';
import util from '../util.js';
import OptionsList from '../controls/options-list.js';
import FormControl from './form-control.js';

class OptionsListControl extends FormControl {

    constructor( props ) {

        super( props );
        this.items = util.setDefault( props.items, [] );
    }

    renderMain() {

        return (

            <OptionsList items={ this.items } />
        );
    }
}

export default OptionsListControl;