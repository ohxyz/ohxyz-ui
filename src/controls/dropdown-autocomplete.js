import React from 'react';
import DropDown from './dropdown.js';
import OptionsList from './options-list.js';
import util from '../util.js';

export default class DropDownAutoComplete extends DropDown {

    constructor( props ) {

        super( props );

        this.handleSelect = this.handleSelect.bind( this );

        this.items = util.setDefault( props.items, [] );
        this.name = util.setDefault( props.name, '' );

        this.classNamePrefix = 'dropdown-autocomplete';

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
                         classNamePrefix={ this.classNamePrefix + '__options-list' }
                         onSelect={ this.handleSelect }
            />

        );
    }
}
