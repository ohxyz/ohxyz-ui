import React from 'react';
import ReactDOM from 'react-dom';
import {

    InsertBase,
    InsertText,
    InsertNumber,
    InsertTextArea,
    InsertDateBase,
    InsertDateByText,
    InsertDateByNumber,

    OptionsBase,
    OptionsList,
    OptionsRadioList,
    OptionsCheckboxList,

    FormControl,

    InsertTextControl,
    InsertNumberControl,
    InsertTextAreaControl,
    InsertDateByTextControl,
    InsertDateByNumberControl,

    OptionsListControl,
    OptionsRadioListControl,
    OptionsCheckboxListControl,

    Dropdown,
    DropdownList,

    Submit,
    SubmitControl,

    dataType,

} from '../web-form-controls.js';

import Dummy from './dummy.js';

class App extends React.Component {

    constructor( props ) {

        super( props );

        const rules = dataType.rules;

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

        let longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis odio ac ipsum posuere dapibus. In vulputate et lectus sit amet aliquam. Fusce et sagittis lacus, sit amet gravida orci. Integer ac lacinia dolor, vel aliquet quam.';

        let rules = [

            // { name: dataType.rules.REQUIRED, meta: { error: 'Required!' } },

            { name: dataType.rules.NUMERIC, meta: { error: 'Between 10 - 20', min: 10, max: 20 } }
        ];

        return (

            <form>

                <OptionsRadioListControl name="my-radios" items={ [ 'home', 'office' ] } title="Where you work" description="Most of the time" />
                <OptionsCheckboxListControl name="check-wrapper-where" items={ [ 'home', 'office' ] } title="Where you work" description="Most of the time" />

                <InsertTextControl 
                    title="Insert Text Control" 
                    description="NO desCRIpt1on"
                    rules={ rules }
                    mandatoryMessage="*"
                />
                <InsertDateByTextControl 
                    title="Insert Date - Text"
                    name="my-insert-date"
                    description={ description2 }
                />

                <InsertDateByNumberControl 
                    title="Insert Date by Number - BOX"
                    description={ description3 }
                />
                
                <InsertDateBase />
                <InsertDateByText />
                <InsertDateByNumber />

                <SubmitControl title="Press following button" text={ longText } description="By pressing this button, you surrender." />

                <Submit text="Primary button" disabled={ true } />

                <OptionsCheckboxList name="good" items={ shorts } />

                <OptionsRadioList name="security-questions" items={ questions } />

                <OptionsListControl title="Options List Control" items={ [ 'a', 'b', 'c' ] } description="A list" />



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

                <InsertTextAreaControl
                    title="Insert Textarea Control" 
                    description={ this.description3 }
                    hint="Only 1, 2, 3..."
                    rules={ rules }
                />
                <InsertNumberControl 
                    title="Insert Number Control" 
                    description="Input some figure"
                    hint="Only 1, 2, 3..."
                />

                <FormControl title="Form Element Control" 
                                errorMessage="No errors. Just show off." 
                                isValid={ false } 
                                description={ description2 }
                />
                <InsertTextArea name="my-insert-textarea" hint="hint area" />
                <InsertNumber name="my-insert-number" hint="hint number" value="100" />
                <InsertText name="my-insert-text" hint="hint text" />

                <InsertBase name="my-insert-base" rules={ this.rules } />

            </form>
        )
    }
}

ReactDOM.render(

    <App />,
    document.getElementById( 'root' )
);