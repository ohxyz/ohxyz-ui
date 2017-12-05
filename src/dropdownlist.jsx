import React from 'react';
import Dropdown from './dropdown.jsx';
import utils from './utils.js';

class ListItem extends React.Component {

    render () {

        let className = 'dropdownlist-item';

        return ( 
            <li className={ className }>
                { this.props.value }
            </li>
        )
    }
}

class Dropdownlist extends Dropdown {

    constructor( props ) {

        super( props );

        this.classNamePrefix = 'dropdownlist';
    }

}

export default Dropdownlist;