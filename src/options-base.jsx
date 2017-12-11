import React from 'react';
import utils from './utils.js';
import Item from './item.js';

const COMPONENT_NAME = 'options-base';
const DEFAULT_OPTION_ITEM_TEXT = 'Default item';

class OptionsItem extends React.Component {

    constructor( props ) {

        super( props );

        this.handleClick = this.handleClick.bind( this );

        this.name = utils.setDefault( props.name, '' );
        this.text = utils.setDefault( props.text, DEFAULT_OPTION_ITEM_TEXT );
        this.value = utils.setDefault( props.value, '' );
        this.isSelected = utils.setDefault( props.isSelected, false );
        this.classNamePrefix = utils.setDefault( props.classNamePrefix, COMPONENT_NAME );

        this.onParentClick = utils.setDefault( props.onClick, () => {} );
    }

    handleClick() {

        let item = new Item( this.name, this.text, this.value );
        this.onParentClick( item );
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

        this.name = utils.setDefault( props.name, '' );
        this.classNamePrefix = utils.setDefault( props.classNamePrefix, COMPONENT_NAME );

        this.items = utils.setDefault( props.items, [] );
        this.onParentSelect = utils.setDefault( props.onSelect, () => {} );
        this.makeItems();

        this.itemSelected = new Item();
        this.itemsSelected = [];

        this.state = {

            itemSelected: null,
            itemsSelected: []
        }

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

        this.itemSelected = item;
        this.onParentSelect( item );

        this.setState( {

            itemSelected: item

        } );
    }

    renderHiddenInput() {

        if ( this.name === '' ) {

            return null;
        }

        return <input type="hidden" name={ this.name } value={ this.itemSelected.value } />
    }

    render() {

        let ul = 

            <ul className={ this.classNamePrefix } >
            { this.renderHiddenInput() }
            {
                this.items.map( ( item, key ) => {

                    return (

                        <OptionsItem key={ key } 
                                     value={ item.value }
                                     text={ item.text }
                                     name={ item.name }
                                     onClick={ this.handleSelect }
                                     classNamePrefix={ this.classNamePrefix }
                                     isSelected={ item.isSelected }
                        />
                    );

                } )
            }
            </ul>;

        return ul;
    }
}

export default OptionsBase;

export {

    OptionsItem,
    OptionsBase
};