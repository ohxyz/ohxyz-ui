import React from 'react';
import ReactDOM from 'react-dom';

import {

    InsertBase,
    InsertText,
    InsertNumber,
    InsertTextArea,
    InsertDateByText,
    InsertDateByNumber,

    OptionsBase,
    OptionsList,
    OptionsRadio,
    OptionsCheckbox,

    FormElementWrapper,

    InsertTextWrapper,
    InsertNumberWrapper,
    InsertTextAreaWrapper,
    InsertDateByTextWrapper,
    InsertDateByNumberWrapper,

    OptionsListWrapper,
    OptionsRadioWrapper,
    OptionsCheckboxWrapper,

    Dropdown,
    DropdownList,

    Submit,
    SubmitWrapper

} from './components.jsx';


class App extends React.Component {

    render() {

        return (

            <form method="POST">
                <DropdownList items={ [ 'Mr', 'Mrs', 'Ms', 'Miss', 'Dr', 'Other' ] } />
            </form>
        )
    }
}

ReactDOM.render(

    <App />,
    document.getElementById( 'root' )
);