import React from 'react';
import util from '../util.js';
import OptionsCheckboxList from '../controls/options-checkbox-list.jsx';
import FormControl from './form-control.jsx';

class OptionsCheckboxListControl extends FormControl {

    constructor( props ) {

        super( props );
        this.items = util.setDefault( props.items, [] );
    }

    renderMain() {

        return (

            <OptionsCheckboxList name={ this.name } items={ this.items } />
        );
    }
}

export default OptionsCheckboxListControl;