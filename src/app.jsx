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

    Submit

} from './components.jsx';

import Dummy from './dummy.jsx';


class App extends React.Component {

    constructor( props ) {

        super( props );

        this.nameRules = [

            { name: rules.REQUIRED, error: 'Name must not be empty' },
            { name: rules.ENGLISH_NAME, error: 'Name can only contain - letter . , - and spaces' }
        ];

        this.infoRules = [

            { name: rules.REQUIRED, error: 'INFO required.' },
        ]

        this.items = [

            { text: 'Mr', value: 'mr' },
            { text: 'Ms', value: 'ms' },
            { text: 'God', value: 'god' },
            { text: 'Goddess', value: 'goddess' }
        ];
    }

    render() {

        let description1 = "The ACCC is Australia’s peak consumer protection and competition agency. The ACCC is an independent statutory government authority serving the public interest. Most of the ACCC’s enforcement work is conducted under the provisions of the Competition and Consumer Act 2010 (the Act).";

        let description2 = "Victoria’s Emergency Services have warned of an increased risk of avalanches in back country alpine areas due to the forecast heavy snowfalls and strong winds.";

        let description3 = "From 1 July 2017, complaints about the conduct or capacity of Victorian judicial officers or the Victorian Civil and Administrative Tribunal (VCAT) members may be made to the Judicial Commission of Victoria. The Commission is an independent organisation established under the Judicial Commission of Victoria Act 2016 to investigate complaints about judicial officers and VCAT members. The Commission provides an accessible and transparent complaint process, which aims to ensure public confidence in Victorian courts and the VCAT is maintained.";

        let options = [
 
            { name: 'option1', 'text': 'Option 1', value: 'option1' },
            { name: 'select-me', 'text': 'Select Me', value: 'selectMe', isSelected: true  },
            { name: '123', 'text': '1 2 3', value: 123, isSelected: true }
        ];

        let questions = [

            'What is the first and last name of your first boyfriend or girlfriend?',
            'Which phone number do you remember most from your childhood? What is the name of your favorite pet?',
            'What was your favorite place to visit as a child?',

        ];

        let shorts = [

            '&*(&*(',
            'ueiwoq',
            ',.vz,c',
        ];

        return (

            <form>
                <Submit text="Primary button" disabled={ false } />
                <OptionsRadioBox name="radio-box" items={ [ 'home', 'office' ] } title="Where you work" description="Most of the time" />
                
                <OptionsCheckboxBox name="check-box-where" items={ [ 'home', 'office' ] } title="Where you work" description="Most of the time" />

                <OptionsCheckbox name="good" items={ shorts } />

                <OptionsRadio name="security-questions" items={ questions } />

                <OptionsListBox title="Options List Box" items={ [ 'a', 'b', 'c' ] } description="A list" />

                <InsertDateByTextBox 
                    title="Insert Date - Text"
                    description={ description2 }
                />

                <InsertDateByNumberBox 
                    title="Insert Date by Number - BOX"
                    description={ description3 }

                />
                <InsertDateByText />
                <InsertDateByNumber />

                <DropdownList id="personal-title" 
                              name="personal-title"
                              title="DropDownList Personal Title"
                              items={ this.items }
                              hint="Select your title"
                />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

                <Dropdown />

                <OptionsList name="y" items={ [ 1, 2, 3 ] } />

                <OptionsBase name="x" items={ options } />

                <InsertTextAreaBox title="Insert Textarea Box" 
                                   description={ this.description3 }
                                   hint="Only 1, 2, 3..."
                                   rules={ this.nameRules }
                />
                <InsertNumberBox title="Insert Number Box" 
                               description="Input some figure"
                               hint="Only 1, 2, 3..."
                />
                <InsertTextBox title="Insert Text Box" 
                               description="Empty"
                               rules={ this.nameRules }
                />
                <FormElementBox title="Form Element Box" 
                                errorMessage="No errors. Just show off." 
                                isValid={ false } 
                                description={ description2 }
                />
                <InsertTextArea name="my-insert-textarea" hint="hint area" />
                <InsertNumber name="my-insert-number" hint="hint number" value="100" />
                <InsertText name="my-insert-text" hint="hint text" />

                <InsertBase name="my-insert-base" rules={ this.nameRules } />

            </form>
        )
    }
}

ReactDOM.render(

    <App />,
    document.getElementById( 'root' )
);