import React from 'react';
import OptionsList from './options-list.jsx';
import FormElementBox from './form-element-box.jsx';
import utils from './utils.js';

class OptionsListBox extends FormElementBox {

    constructor( props ) {

        super( props );
        this.items = utils.setDefault( props.items, [] );
    }

    renderMain() {

        return (

            <OptionsList items={ this.items } />
        );
    }
}

export default OptionsListBox;