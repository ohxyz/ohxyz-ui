import React from 'react';
import util from '../util.js';
import OptionsBase from './options-base.jsx';

class OptionsList extends OptionsBase {

    constructor( props ) {

        super( props );

        this.classNamePrefix = util.setDefault( props.classNamePrefix, 'options-list' );

    }

}

export default OptionsList;