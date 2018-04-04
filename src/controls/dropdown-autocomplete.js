import React from 'react';
import DropDownList from './dropdown-list.js';

import InsertText from './insert-text.js';
import util from '../util.js';

export default class DropDownAutoComplete extends DropDownList {

    constructor( props ) {

        super( props );

        this.classNamePrefix = 'dropdown-autocomplete';
    }

    renderHeader() {

        let className = this.classNamePrefix + '__insert-text';

        return (

            <InsertText classNamePrefix={ className} />
        );
    }

    renderHiddenInput() {

        return null;
    }
}
