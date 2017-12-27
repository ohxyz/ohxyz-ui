import React from 'react';
import OptionsList from '../controls/options-list.jsx';
import ControlWrapper from './control-wrapper.jsx';
import util from '../util.js';

class OptionsListWrapper extends ControlWrapper {

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