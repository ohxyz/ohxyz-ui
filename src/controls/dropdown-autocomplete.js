import React from 'react';
import DropDownList from './dropdown-list.js';
import InsertText from './insert-text.js';
import OptionsList from './options-list.js';
import util from '../util.js';
import datatype, { Item } from '../datatype.js';

export default class DropDownAutoComplete extends DropDownList {

    constructor( props ) {

        super( props );

        this.classNamePrefix = 'dropdown-autocomplete';
        this.handleChange = this.handleChange.bind( this );
        this.handleItemSelect = this.handleItemSelect.bind( this );

        // Text input or changed in the InsertText 
        this.text = '';

        this.items = util.setDefault( props.items, [] );
        this.placeholder = util.setDefault( props.placeholder, 'Search') ;
        this.itemsFiltered = [];
        
        this.itemsRaw = [];
        this.insertTextElement = null;

        this.state = {

            text: this.text,
            itemsFiltered: this.items
        }
    }

    renderHeader() {

        return ( 

            <div className={ this.classNamePrefix + '__header' } >
                { this.renderHeaderContent() }
            </div>
        );
    }

    renderHeaderContent() {

        let className = this.classNamePrefix + '__insert-text';

        return (

            <InsertText
                hint={ this.placeholder }
                classNamePrefix={ className }
                onChange={ this.handleChange }
                ref={ elem => this.insertTextElement = elem }
            />

        );
    }

    renderHiddenInput() {

        return;
    }

    handleHeaderClick() {

        return;
    }

    handleChange( event ) {

        this.text = event.target.value;
        this.filterItemsByText( this.text );

        this.setState( {

            text: this.text
        } );
    }

    filterItemsByText( text ) {

        let textOfItem = '';
        let itemsFiltered = [];

        for ( let i = 0; i < this.items.length; i ++ ) {

            let item = this.items[ i ];

            if ( typeof item === 'string' ) {

                textOfItem = item;

            }
            else if ( item.hasOwnProperty( 'text' ) === true ) {

                textOfItem = item.text;
            }

            if ( textOfItem.indexOf( text ) >= 0 ) {

                itemsFiltered.push( new Item (

                    textOfItem,
                    textOfItem,
                    textOfItem
                ) );
            }
        }

        console.log( itemsFiltered );

        this.itemsFiltered = itemsFiltered;
        this.isOpen = true;

        this.setState( { 

            text: text,
            itemsFiltered: itemsFiltered

        } );

    }

    handleItemSelect( item ) {

        this.itemSelected = item;
        this.text = item.text;

        this.setState( {

            text: this.text

        } );

        this.insertTextElement.domElement.value = this.text;
        this.close();

        if ( this.props.onSelect === 'function' ) {

            this.props.onSelect( item );
        }
    }

    renderInnerContent() {

        let items = this.itemsFiltered;

        if ( items.length === 0 ) {

            items = [ new Item( 'No Result', 'No Result', 'No Result' ) ];
        }

        return (

            <OptionsList 
                items={ items }
                classNamePrefix={ this.classNamePrefix + '__options-list' }
                onSelect={ this.handleItemSelect }
            />

        );
    }
}
