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
    DropDownAutoComplete,

    Submit,
    SubmitControl,

    dataType,

} from '../../src/main.js';

import Dummy from './dummy.js';

require( '../../less/main.less');

class App extends React.Component {

    constructor( props ) {

        super( props );

        const rules = dataType.rules;

        this.options = [

            { label: 'Mr', value: 'mr' },
            { label: 'Ms', value: 'ms' },
            { label: 'God', value: 'god' },
            { label: 'Goddess', value: 'goddess' },
            { label: 'abc', value: '1234' },
            { label: 'abd', value: '1234' },
            { label: 'abe', value: '1234' },
            { label: 'bcd', value: '1234' },
            { label: 'bcf', value: '1234' }
        ];
    }

    render() {

        let info1 = "The ACCC is Australia’s peak consumer protection and competition agency. The ACCC is an independent statutory government authority serving the public interest. Most of the ACCC’s enforcement work is conducted under the provisions of the Competition and Consumer Act 2010 (the Act).";

        let info2 = "Victoria’s Emergency Services have warned of an increased risk of avalanches in back country alpine areas due to the forecast heavy snowfalls and strong winds.";

        let info3 = "From 1 July 2017, complaints about the conduct or capacity of Victorian judicial officers or the Victorian Civil and Administrative Tribunal (VCAT) members may be made to the Judicial Commission of Victoria. The Commission is an independent organisation established under the Judicial Commission of Victoria Act 2016 to investigate complaints about judicial officers and VCAT members. The Commission provides an accessible and transparent complaint process, which aims to ensure public confidence in Victorian courts and the VCAT is maintained.";

        let options = [
 
            { label: 'option1', value: 'option1' },
            { label: 'select-me', value: 'selectMe', selected: true  },
            { label: '123', value: 123, selected: true }
        ];

        let questions = [

            'What ',
            'Which ',
            'When',
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

                <DropDownAutoComplete 
                    name="my-dropdowon-autocomplete"
                    options={ this.options }
                />

                <OptionsRadioListControl name="my-radios" options={ [ 'home', 'office' ] } title="Where you work" info="Most of the time" />
                <OptionsCheckboxListControl name="check-wrapper-where" options={ [ 'home', 'office' ] } title="Where you work" info="Most of the time" />

                <InsertTextControl 
                    title="Insert Text Control" 
                    info="NO desCRIpt1on"
                    rules={ rules }
                    subtitle="*"
                />
                <InsertDateByTextControl 
                    title="Insert Date - Text"
                    name="my-insert-date"
                    info={ info2 }
                />

                <InsertDateByNumberControl 
                    title="Insert Date by Number - BOX"
                    info={ info3 }
                />
                
                <InsertDateBase />
                <InsertDateByText />
                <InsertDateByNumber />

                <SubmitControl title="Press following button" text={ longText } info="By pressing this button, you surrender." />

                <Submit text="Primary button" disabled={ true } />

                <OptionsCheckboxList name="good" options={ shorts } />

                <OptionsRadioList name="security-questions" options={ questions } />

                <OptionsListControl title="Options List Control" options={ [ 'a', 'b', 'c' ] } info="A list" />

                <DropdownList id="personal-title" 
                              name="personal-title"
                              title="DropDownList Personal Title"
                              options={ this.options }
                              hint="Select your title"
                />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

                <Dropdown />
                
                <OptionsList name="y" options={ [ 1, 2, 3, 4 ] } />

                <OptionsBase name="x" options={ options } />

                <InsertTextAreaControl
                    title="Insert Textarea Control" 
                    info={ this.info3 }
                    hint="Only 1, 2, 3..."
                    rules={ rules }
                />
                <InsertNumberControl 
                    title="Insert Number Control" 
                    info="Input some figure"
                    hint="Only 1, 2, 3..."
                />

                <FormControl title="Form Element Control" 
                                errorMessage="No errors. Just show off." 
                                isValid={ false } 
                                info={ info2 }
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