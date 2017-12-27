import React from 'react';
import InsertDateByText from '../controls/insert-date-by-text.jsx';
import ControlWrapper from './control-wrapper.jsx';

class InsertDateByTextWrapper extends ControlWrapper {

    renderMain() {

        return (

            <InsertDateByText name={ this.props.name } onError={ this.handleError.bind( this ) } />
        );
    }
}

export default InsertDateByTextWrapper;