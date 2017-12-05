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

        this.description1 = "The ACCC is Australia’s peak consumer protection and competition agency. The ACCC is an independent statutory government authority serving the public interest. Most of the ACCC’s enforcement work is conducted under the provisions of the Competition and Consumer Act 2010 (the Act).";

        this.description2 = "Victoria’s Emergency Services have warned of an increased risk of avalanches in back country alpine areas due to the forecast heavy snowfalls and strong winds.";


        this.items = [ 'Mr', 'Ms', 'God', 'Goddess' ];
    }

    render() {
        
        return (
            <form>

                <Dropdownlist id="personal-title" 
                              name="personal-title"
                              title="Title"
                              items={ this.items }
                              description={ this.description2 }

                />
                <Dropdown id="state" description={ this.description2 }/>
                <TextBox id="your-name"
                         name="your-name"
                         title="Name"
                         value=""
                         description={ this.description1 }
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