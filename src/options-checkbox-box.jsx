import React from 'react';
import OptionsCheckbox from './options-checkbox.jsx';
import FormElementBox from './form-element-box.jsx';
import util from './util.js';

class OptionsCheckboxBox extends FormElementBox {

    constructor( props ) {

        super( props );
        this.items = util.setDefault( props.items, [] );
    }

    renderMain() {

        return (

            <OptionsCheckbox items={ this.items } />
        );
    }
}

export default OptionsCheckboxBox;