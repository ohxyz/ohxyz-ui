import React from 'react';
import Dropdown from './dropdown.jsx';
import OptionList from './optionlist.jsx';
import utils from './utils.js';

class DropdownList extends Dropdown {

    constructor( props ) {

        super( props );

        this.handleClick = this.handleClick.bind( this );

        this.items = utils.setDefault( props.items, [] );

        this.className = 'dropdownlist';
        this.classNamePrefix = 'dropdownlist';

        this.isSelected = false;
        this.itemSelected = null;

        this.state = {

            itemSelected: null
        };
    }

    handleClick( item ) {

        this.itemSelected = item;
        this.isSelected = true;

        this.className = this.classNamePrefix + ' is-selected';

        this.setState( {

            itemSelected: item

        } );

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

        return ( 

            <OptionList items={ this.items }
                        className={ className }
                        classNamePrefix={ this.classNamePrefix }
                        onClick={ this.handleClick }

            />

        );

    }
}

export default DropdownList