import React from 'react';
import DropDown from './dropdown.jsx';
import OptionsList from './options-list.jsx';
import util from './util.js';

class DropdownList extends DropDown {

    constructor( props ) {

        super( props );

        this.handleSelect = this.handleSelect.bind( this );

        this.items = util.setDefault( props.items, [] );
        this.name = util.setDefault( props.name, '' );

        this.classNamePrefix = 'dropdown-list';

        this.isSelected = false;
        this.itemSelected = null;

        this.state = {

            itemSelected: null
        };
    }

    handleSelect( item ) {

        this.itemSelected = item;
        this.isSelected = true;
        this.value = item.value;

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

        return (

            <OptionsList items={ this.items }
                         classNamePrefix={ this.classNamePrefix + '-options-list' }
                         onSelect={ this.handleSelect }
            />

        );
    }
}

export default DropdownList;