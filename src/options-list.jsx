import React from 'react';
import utils from './utils.js';
import OptionsBase from './options-base.jsx';

class OptionsList extends OptionsBase {

    constructor( props ) {

        super( props );

        this.classNamePrefix = utils.setDefault( props.classNamePrefix, 'options-list' );

    }

}

export default OptionsList;