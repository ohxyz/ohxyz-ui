import React from 'react';
import util from './util.js';
import Item from './item.js';

const COMPONENT_NAME = 'options-base';
const DEFAULT_OPTION_ITEM_TEXT = 'Options item';

class OptionsBaseItem extends React.Component {

    constructor( props ) {

        super( props );

        this.handleClick = this.handleClick.bind( this );

        this.name = util.setDefault( props.name, '' );
        this.text = util.setDefault( props.text, DEFAULT_OPTION_ITEM_TEXT );
        this.value = util.setDefault( props.value, '' );
        this.isSelected = util.setDefault( props.isSelected, false );
        this.classNamePrefix = util.setDefault( props.classNamePrefix, COMPONENT_NAME );

        this.item = new Item( this.name, this.text, this.value );

        this.onParentClick = util.setDefault( props.onClick, () => {} );
    }

    handleClick() {

        this.isSelected = !this.isSelected;

        this.onParentClick( this.item );
    }

    renderListContent() {

        return this.text;
    }

    render() {

        let className = this.classNamePrefix + '-item';
        className += this.isSelected === true ? ' is-selected' : '';

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
        this.classNamePrefix = util.setDefault( props.classNamePrefix, COMPONENT_NAME );

        this.items = util.setDefault( props.items, [] );
        this.onParentSelect = util.setDefault( props.onSelect, () => {} );
        this.makeItems();

        this.itemSelected = new Item();
        this.itemsSelected = [];

        this.state = {

            itemSelected: this.itemSelected
        };

    }

    makeItems() {

        for ( let i = 0; i < this.items.length; i ++ ) {

            let item = this.items[ i ];

            if ( typeof item !== 'object' ) {

                item = new Item( item, item, item );
            }

            this.items[ i ] = item;
        }

    }

    handleSelect( item ) {

        this.itemSelected = this.itemSelected === item ? null : item;
        util.toggleArrayItem( item, this.itemsSelected );

        this.onParentSelect( item );

        this.setState( { 

            itemsSelected: this.itemsSelected
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
                        value: item.value,
                        text: item.text,
                        name: item.name,
                        onClick: this.handleSelect,
                        classNamePrefix: this.classNamePrefix,
                        isSelected: item.isSelected
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