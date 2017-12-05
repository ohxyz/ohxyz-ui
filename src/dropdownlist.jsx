import React from 'react';
import Dropdown from './dropdown.jsx';
import utils from './utils.js';

const COMPONENT_NAME = 'dropdownlist';

class ListItem extends React.Component {

    render () {

        let className = COMPONENT_NAME + '-item';

        return ( 
            <li className={ className }
                onClick={ () => this.props.onClick( this.props.text, this.props.value ) } 
            >
                { this.props.text }
            </li>
        );
    }
}

class Dropdownlist extends Dropdown {

    constructor( props ) {

        super( props );

        this.handleItemListClick = this.handleItemListClick.bind( this );
        
        this.classNamePrefix = COMPONENT_NAME;
        this.className = COMPONENT_NAME;

        this.isSelected = false;
        this.itemSelected = utils.setDefault( props.itemSelected, null );

        this.items = utils.setDefault( props.items, [] );
    }

    handleItemListClick( itemText, itemValue ) {

        this.isSelected = true;
        this.itemSelected = { text: itemText, value: itemValue };
        this.className = this.className + ' is-selected';

        this.value = itemValue;
        this.close();
    }

    renderHeaderContent() {

        if ( this.isSelected === false ) {

            return this.hint;
        }

        return this.itemSelected.text;
    }

    renderInnerContent() {

        let className = this.classNamePrefix + '-list';
        let list = [ 1, 2, 3 ];

        return (

            <ul className={ className } >
            {
                this.items.map( ( item, key ) => { 

                    return (

                        <ListItem key={ key } 
                                  text={ item.text }
                                  value={ item.value }
                                  onClick={ this.handleItemListClick }
                        />
                    );
                } )
            }
            </ul>

        );
    }

    renderHiddenInput() {

        return <input type="hidden" name={ this.id } value={ this.value } />
    }

}

export default Dropdownlist;