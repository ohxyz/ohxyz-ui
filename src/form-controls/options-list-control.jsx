import React from 'react';
import util from '../util.js';
import OptionsList from '../controls/options-list.jsx';
import FormControl from './form-control.jsx';

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