import React from 'react';
import ReactDOM from 'react-dom';
import { TextBox } from './text-box.js';

class App extends React.Component {

    render() {

        return <TextBox />;

    }
}

ReactDOM.render(

    <App />,
    document.getElementById( 'root' )
);