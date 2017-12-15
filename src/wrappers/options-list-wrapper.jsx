import React from 'react';
import OptionsList from '../elements/options-list.jsx';
import FormElementWrapper from './form-element-wrapper.jsx';
import util from '../util.js';

class OptionsListWrapper extends FormElementWrapper {

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

export default OptionsListWrapper;