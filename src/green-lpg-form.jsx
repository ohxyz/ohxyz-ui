import React from 'react';
import ReactDOM from 'react-dom';
import rules from './rules.js';
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

    FormElementBox,

    InsertTextBox,
    InsertNumberBox,
    InsertTextAreaBox,
    InsertDateByTextBox,
    InsertDateByNumberBox,

    OptionsListBox,
    OptionsRadioBox,
    OptionsCheckboxBox,

    Dropdown,
    DropdownList,

    Submit,
    SubmitBox

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