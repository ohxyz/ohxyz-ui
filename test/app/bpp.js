import React from 'react';
import ReactDOM from 'react-dom';
import {

    DropDownAutoComplete,
    Table,

    dataType,

} from '../../src/main.js';

import Dummy from './dummy.js';

require( '../../less/main.less');

class App extends React.Component {

    constructor( props ) {

        super( props );

        this.items = [

            { text: 'Mr', value: 'mr' },
            { text: 'Ms', value: 'ms' },
            { text: 'God', value: 'god' },
            { text: 'Goddess', value: 'goddess' },
            { text: 'abc', value: '1234' },
            { text: 'abd', value: '1234' },
            { text: 'abe', value: '1234' },
            { text: 'bcd', value: '1234' },
            { text: 'bcf', value: '1234' }
        ];
    }

    render() {

        let rows = [

            [ 'A', 'B', 'C' ],
            [ 'Apple', 'Banana', 'Cat' ],
            [ 'Very long text', 'short', 'Then very long text again' ]

        ];

        return (

            <div> 

                <DropDownAutoComplete
                    name="my-dropdowon-autocomplete"
                    url="/results.json"
                    jsonProperty="name"
                />

                <Table 
                    head={ [ 'Name', 'Organisation Name', 'Organisation Type' ] }
                    rows={ rows }
                />
            </div>
        );
    }
}

ReactDOM.render(

    <App />,
    document.getElementById( 'root' )
);