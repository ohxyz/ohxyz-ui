import React from 'react';
import InsertDateByNumber from '../controls/insert-date-by-number.jsx';
import FormControl from './form-control.jsx';

class InsertDateByNumberControl extends FormControl {

    renderMain() {

        return (

            <InsertDateByNumber />
        );
    }
}

export default InsertDateByNumberControl;