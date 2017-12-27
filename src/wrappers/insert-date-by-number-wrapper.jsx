import React from 'react';
import InsertDateByNumber from '../controls/insert-date-by-number.jsx';
import ControlWrapper from './control-wrapper.jsx';

class InsertDateByNumberWrapper extends ControlWrapper {

    renderMain() {

        return (

            <InsertDateByNumber />
        );
    }
}

export default InsertDateByNumberWrapper;