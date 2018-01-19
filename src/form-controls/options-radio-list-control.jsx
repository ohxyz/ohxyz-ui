import React from 'react';
import util from '../util.js';
import OptionsRadioList from '../controls/options-radio-list.jsx';
import FormControl from './form-control.jsx';

class OptionsRadioListControl extends FormControl {

    constructor( props ) {

        super( props );
        this.items = util.setDefault( props.items, [] );
    }

    renderMain() {

        return (

            <OptionsRadioList name={ this.name } items={ this.items } />
        );
    }
}

export default OptionsRadioListControl;