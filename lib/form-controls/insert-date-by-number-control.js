import React from 'react';
import InsertDateByNumber from '../controls/insert-date-by-number.js';
import FormControl from './form-control.js';

class InsertDateByNumberControl extends FormControl {

    renderMain() {

        return React.createElement(InsertDateByNumber, null);
    }
}

export default InsertDateByNumberControl;