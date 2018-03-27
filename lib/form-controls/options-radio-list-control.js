import React from 'react';
import util from '../util.js';
import OptionsRadioList from '../controls/options-radio-list.js';
import FormControl from './form-control.js';

class OptionsRadioListControl extends FormControl {

    constructor(props) {

        super(props);
        this.items = util.setDefault(props.items, []);
    }

    renderMain() {

        return React.createElement(OptionsRadioList, { name: this.name, items: this.items });
    }
}

export default OptionsRadioListControl;