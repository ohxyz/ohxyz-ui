import React from 'react';
import OptionsRadio from '../controls/options-radio.jsx';
import ControlWrapper from './control-wrapper.jsx';
import util from '../util.js';

class OptionsRadioWrapper extends ControlWrapper {

    constructor( props ) {

        super( props );
        this.items = util.setDefault( props.items, [] );
    }

    renderMain() {

        return (

            <OptionsRadio name={ this.name } items={ this.items } />
        );
    }
}

export default OptionsRadioWrapper;