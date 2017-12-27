import React from 'react';
import util from '../util.js';
import OptionsCheckbox from '../controls/options-checkbox.jsx';
import FormControl from './form-control.jsx';

class OptionsCheckboxControl extends FormControl {

    constructor( props ) {

        super( props );
        this.items = util.setDefault( props.items, [] );
    }

    renderMain() {

        return (

            <OptionsCheckbox name={ this.name } items={ this.items } />
        );
    }
}

export default OptionsCheckboxControl;