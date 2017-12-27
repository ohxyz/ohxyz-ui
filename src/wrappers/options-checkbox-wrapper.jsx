import React from 'react';
import util from '../util.js';
import OptionsCheckbox from '../controls/options-checkbox.jsx';
import ControlWrapper from './control-wrapper.jsx';

class OptionsCheckboxWrapper extends ControlWrapper {

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

export default OptionsCheckboxWrapper;