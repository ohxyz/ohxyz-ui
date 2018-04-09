import React from 'react';
import ReactDOM from 'react-dom';
import DropDownAutoComplete from '../../src/controls/deprecated-dropdown-autocomplete.js';

import {

    Table,
    dataType,
} from '../../src/main.js';


require( '../../less/main.less');

class App extends React.Component {

    constructor( props ) {

        super( props );

        this.state = {

            rows: [ [ 'NA', 'NA', 'NA' ] ]

        };
    }

    onSearchTextChange( items ) {

        // console.log( '---', items );

    }

    onSearchTextSelect( items ) {
        
        let rows = items.map( item => [ item.name, item.org_name, item.org_type ] );

        this.setState( {

            rows: rows

        } );
    }

    render() {

        return (

            <div>
                <DropDownAutoComplete
                    name="my-dropdowon-autocomplete"
                    url="/results.json"
                    jsonProperty="name"
                    onChange={ this.onSearchTextChange.bind( this ) }
                    onSelect={ this.onSearchTextSelect.bind( this ) }
                />
                <Table 
                    head={ [ 'Name', 'Organisation Name', 'Organisation Type' ] }
                    rows={ this.state.rows }
                />
            </div>
        );
    }
}

ReactDOM.render(

    <App />,
    document.getElementById( 'root' )
);