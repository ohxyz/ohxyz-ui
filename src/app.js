import React from 'react';
import ReactDOM from 'react-dom';
import { TextBox } from './text-box.js';

class App extends React.Component {

    render() {

        return <TextBox value="13" />;

    }
}

ReactDOM.render(

    <App />,
    document.getElementById( 'root' )
);