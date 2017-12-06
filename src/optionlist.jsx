import React from 'react';
import BasicFormComponent from './basic-form-component.jsx';
import utils from './utils.js';
import Item from './item.js';

const COMPONENT_NAME = 'optionlist';
const DEFAULT_OPTION_ITEM_TEXT = 'Option Item';

class OptionItem extends React.Component {

    constructor( props ) {

        super( props );

        this.handleClick = this.handleClick.bind( this );

        this.name = utils.setDefault( props.name, '' );
        this.text = utils.setDefault( props.text, DEFAULT_OPTION_ITEM_TEXT );
        this.value = utils.setDefault( props.value, '' );
        this.isSelected = utils.setDefault( props.isSelected, false );
        this.classNamePrefix = utils.setDefault( props.classNamePrefix, COMPONENT_NAME );

        this.onCallerClick = utils.setDefault( props.onClick, () => {} );
    }

    handleClick() {

        let item = new Item( this.name, this.text, this.value );
        this.onCallerClick( item );
    }

    render() {

        let className = this.classNamePrefix + '-item';
        className += this.isSelected === true ? ' is-selected' : '';

        return (

            <li className={ className } onClick={ this.handleClick } >
                { this.text }
            </li>
        );
    }

}

class OptionList extends React.Component {

    constructor( props ) {

        super( props );

        this.handleClick = this.handleClick.bind( this );

        this.className = utils.setDefault( props.className, COMPONENT_NAME );
        this.classNamePrefix = utils.setDefault( props.classNamePrefix, COMPONENT_NAME );
        this.onCallerClick = utils.setDefault( props.onClick, () => {} );

        this.items = utils.setDefault( props.items, [] );
        this.makeItems();

        this.itemSelected = null;
        this.itemsSelected = [];

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

    handleClick( item ) {

        this.itemSelected = item;
        this.onCallerClick( item );
    }

    render() {

        let ul = 

            <ul className={ this.className } >
            {
                this.items.map( ( item, key ) => {

                    return (

                        <OptionItem key={ key } 
                                    value={ item.value }
                                    text={ item.text }
                                    name={ item.name }
                                    onClick={ this.handleClick }
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

export default OptionList