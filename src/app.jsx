import React from 'react';
import ReactDOM from 'react-dom';
import rules from './rules.js';
import {
    TextBox,
    TextBoxBasic,
    TextBoxArea,
    TextBoxNumber,
    DropDown, 
    DropDownList, 
    OptionList,
    DateDropDownList,
    DateTextBox
} from './components.jsx';


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
            { name: '123', 'text': '1 2 3', value: 123 }
        ];

        return (
            <form>

                <DateTextBox title="Date Text Box - number" type="number" />

                <DateTextBox title="Date Text Box " />

                <DateDropDownList title="Date Dropdown List" />

                <OptionList items={ options } />

                <DropDownList id="personal-title" 
                              name="personal-title"
                              title="DropDownList Personal Title"
                              items={ this.items }
                              hint="Select your title"
                              description={ description2 }

                />
                <DropDown id="state" description={ description3 } />

                <TextBox id="info"
                         name="info"
                         type="textarea"
                         value="help"
                         title="TextBox(textarea) Addtional Information"
                         description={ description1 }
                         rules={ this.infoRules }
                />
                <TextBox id="figure"
                         type="number"
                         name="figure"
                         title="TextBox[number] Sample Figure"
                         description="Some figures"
                />
                <TextBoxBasic id="your-name"
                         name="your-name"
                         title="TextBox - default Your Name"
                         value="joke"
                         description={ description1 }
                         rules={ this.nameRules }
                />
            </form>
        )

    }
}

ReactDOM.render(

    <App />,
    document.getElementById( 'root' )
);