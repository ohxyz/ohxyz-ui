import React from 'react';
import ReactDOM from 'react-dom';
import { TextBox } from './textbox.js';

class App extends React.Component {

    render() {

        return (

            <TextBox id="message-id"
                     name="message-id"
                     title="Message ID"
                     value="2"
                     rule={ { name: 'numeric', min: 1, max: 3 } }
            />
        )

    }
}

ReactDOM.render(

    <App />,
    document.getElementById( 'root' )
);