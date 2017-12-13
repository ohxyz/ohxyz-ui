import React from 'react';
import util from './util.js';
import { Item } from './datatype.js';
import datatype from './datatype.js';

const COMPONENT_NAME = 'options-base';

class OptionsBaseItem extends React.Component {

    constructor( props ) {

        super( props );

        this.handleClick = this.handleClick.bind( this );

        this.item = util.setDefault( props.item )
        this.classNamePrefix = util.setDefault( props.classNamePrefix, COMPONENT_NAME );

        this.onParentClick = util.setDefault( props.onClick, () => {} );
    }

    handleClick() {

        this.onParentClick( this.item );
    }

    renderListContent() {

        return this.item.text;
    }

    render() {

        let className = this.classNamePrefix + '-item';
        className += this.item.isSelected === true ? ' is-selected' : '';

        return (

            <li className={ className } onClick={ this.handleClick } >
                { this.renderListContent() }
            </li>
        );
    }

}

class OptionsBase extends React.Component {

    constructor( props ) {

        super( props );

        this.handleSelect = this.handleSelect.bind( this );

        this.name = util.setDefault( props.name, '' );
        this.type = util.setDefault( props.type, datatype.OPTIONS_TYPE_SINGLE );
        this.items = util.setDefault( props.items, [] );

        this.classNamePrefix = util.setDefault( props.classNamePrefix, COMPONENT_NAME );
        this.onParentSelect = util.setDefault( props.onSelect, () => {} );

        this.itemSelected = new Item();
        this.lastItemSelected = new Item();
        this.itemsSelected = [];

        // If type is single, but more than one item's isSelected: true,
        // then only last one is selected.
        this.makeItems();


        this.state = {

            itemSelected: this.itemSelected
        };

    }

    makeItems() {

        for ( let i = 0; i < this.items.length; i ++ ) {

            let item = this.items[ i ];

            if ( typeof item !== 'object' ) {

                item = new Item( item, item, item, false );
            }
            else {

                item = new Item( item.name, item.text, item.value, item.isSelected );
                this.assignItemsSelected( item );
            }

            this.items[ i ] = item;
        }

    }

    assignItemsSelected( item ) {

        if ( item.isSelected === false ) {

            return;
        }

        if ( this.type === datatype.OPTIONS_TYPE_SINGLE ) {

            this.selectNewItem( item );
        }
        else if ( this.type === datatype.OPTIONS_TYPE_MULTIPLE ) {

            this.itemsSelected.push( item );
        }
    }

    selectNewItem( item ) {

        this.lastItemSelected = this.itemSelected;
        this.lastItemSelected.isSelected = false;

        this.itemSelected = item;
        this.itemSelected.isSelected = true;
    }


    handleSelect( item ) {

        if ( this.type === datatype.OPTIONS_TYPE_SINGLE ) {

            return this.hanldeSingleSelect( item );

        }
        else if ( this.type === datatype.OPTIONS_TYPE_MULTIPLE ) {

            return this.handleMutlipleSelect( item );
        }

    }

    handleMutlipleSelect( item ) {

        item.isSelected = !item.isSelected;

        util.toggleArrayItem( item, this.itemsSelected );

        this.onParentSelect( item );

        this.setState( { 

            itemsSelected: this.itemsSelected

        } );

    }

    hanldeSingleSelect( item ) {

        this.selectNewItem( item );

        // console.log( this.lastItemSelected, this.itemSelected, this.items  );

        this.onParentSelect( item );

        this.setState( {

            itemSelected: this.itemSelected

        } );

    }

    renderHiddenInput() {

        if ( this.name === '' ) {

            return null;
        }

        return <input type="hidden" name={ this.name } value={ this.itemSelected.value } />
    }

    createOptionsItem( propsObject ) {

        return React.createElement( OptionsBaseItem, propsObject );
    }

    render() {

        let ul = 

            <ul className={ this.classNamePrefix } >
            { this.renderHiddenInput() }
            {
                this.items.map( ( item, key ) => {

                    let propsObject = {

                        key: key,
                        item: item,
                        onClick: this.handleSelect,
                        classNamePrefix: this.classNamePrefix,
                    };

                    let optionsItem = this.createOptionsItem( propsObject );

                    return optionsItem;
                } )
            }
            </ul>;

        return ul;
    }
}

export default OptionsBase;

export {

    OptionsBaseItem,
    OptionsBase
};