import React from 'react';
import ReactDOM from 'react-dom';
import rules from './rules.js';
import TextBox from './textbox.jsx';
import Dropdown from './dropdown.jsx';
import Dropdownlist from './dropdownlist.jsx';

class App extends React.Component {

    constructor( props ) {

        super( props );

        this.nameRules = [

            { name: rules.REQUIRED, error: 'Name must not be empty' },
            { name: rules.ENGLISH_NAME, error: 'Name can only contain - letter . , - and spaces' }
        ];

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


        return (
            <form>

                <Dropdownlist id="personal-title" 
                              name="personal-title"
                              title="Title"
                              items={ this.items }
                              hint="Select your title"
                              description={ description2 }

                />
                <Dropdown id="state" description={ description3 } />
                <TextBox id="your-name"
                         name="your-name"
                         title="Name"
                         value=""
                         description={ description1 }
                         error="Your name must not be empty."
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