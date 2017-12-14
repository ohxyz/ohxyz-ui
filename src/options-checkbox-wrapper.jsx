import React from 'react';
import OptionsCheckbox from './options-checkbox.jsx';
import FormElementWrapper from './form-element-wrapper.jsx';
import util from './util.js';

class OptionsCheckboxWrapper extends FormElementWrapper {

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