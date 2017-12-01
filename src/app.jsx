import React from 'react';
import ReactDOM from 'react-dom';
import rules from './rules.js';
import TextBox from './textbox.jsx';

class App extends React.Component {

    constructor( props ) {

        super( props );

        this.description1 = "The ACCC is Australia’s peak consumer protection and competition agency. The ACCC is an independent statutory government authority serving the public interest. Most of the ACCC’s enforcement work is conducted under the provisions of the Competition and Consumer Act 2010 (the Act).";
    }

    render() {

        return (
            <form>

                <TextBox id="input-field-id" value="123" />
                <TextBox id="your-name"
                         name="your-name"
                         title="Name"
                         value=""
                         description={ this.description1 }
                         error="Your name must not be empty."
                         rule={ { name: rules.REQUIRED } }
                />
            </form>
        )

    }
}

ReactDOM.render(

    <App />,
    document.getElementById( 'root' )
);