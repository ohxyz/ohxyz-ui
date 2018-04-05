import React from 'react';
import DropDownList from './dropdown-list.js';
import InsertText from './insert-text.js';
import OptionsList from './options-list.js';
import util from '../util.js';
import datatype from '../datatype.js';

export default class DropDownAutoComplete extends DropDownList {

    constructor( props ) {

        super( props );

        this.classNamePrefix = 'dropdown-autocomplete';
        this.text = '';

        this.url = util.setDefault( props.url, '' );
        this.jsonProperty = util.setDefault( props.jsonProperty, '' );
        this.onPropsChange = util.setDefault( props.onChange, () => {} );
        this.onPropsSelect = util.setDefault( props.onSelect, () => {} );
        this.items = util.setDefault( props.items, [] );

        this.itemsFiltered = [];
        this.itemsRaw = [];
        this.resultFetched = '';
        this.insertTextElement = null;

    }

    renderHeader() {

        return ( 

            <div className={ this.classNamePrefix + '__header' } >
                { this.renderHeaderContent() }
                { this.renderSelectedItems() }
            </div>
        );
    }

    // TODO: Render multiple selected items, right now only one
    renderSelectedItems() {

        let classNameOfContainer = this.classNamePrefix + '__items-container';
        let classNameOfItem = this.classNamePrefix + '__item-selected';

        return (

            <div className={ classNameOfContainer }>
            { 
                this.itemSelected.value !== '' 
                    ? <span className={ classNameOfItem }>{ this.itemSelected.value }</span>
                    : null 
            }
            </div>
        );
    }

    renderHeaderContent() {

        let className = this.classNamePrefix + '__insert-text';

        return (

            <InsertText
                classNamePrefix={ className }
                onChange={ this.handleChange.bind( this ) }
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
        this.close();

        if ( this.text.length > 2 ) {

            fetch( this.url )
                .then( response => { 

                    return response.json() ;

                } )
                .then( json => {

                    this.handleJsonResult( json );
                    this.onPropsChange( this.itemsFiltered );

                } );
        }
    }

    handleJsonResult( json ) {

        if ( this.jsonProperty === ''
                || Array.isArray( json ) === false ) {

            return;
        }

        this.itemsRaw = [];
        this.itemsFiltered = [];

        json.forEach( object => {

            let lowerCasesOfText = this.text.toLowerCase();
            let lowerCasesOfOrgName = object.org_name.toLowerCase();

            if ( lowerCasesOfOrgName.indexOf( lowerCasesOfText ) >= 0 ) {

                let item = new datatype.Item( object.org_name, object.org_name, object.org_type );

                this.itemsFiltered.push( item );
                this.itemsRaw.push( object );
            }

        } );

        if ( this.itemsFiltered.length > 0 ) {

            this.isOpen = true;

            this.setState( { 

                items: this.itemsFiltered
            } );

        }
        else {

            this.isOpen = false;
        }
    }

    handleSelect( item ) {

        this.itemSelected = item;
        this.isSelected = true;
        this.text = item.text;

        this.className = this.classNamePrefix + ' is-selected';

        this.setState( {

            text: this.text

        } );

        this.insertTextElement.inputElement.value = this.text;

        this.close();
        this.onPropsSelect( this.itemsRaw );
    }

    renderInnerContent() {

        return (

            <OptionsList items={ this.itemsFiltered }
                         classNamePrefix={ this.classNamePrefix + '__options-list' }
                         onSelect={ this.handleSelect }
            />

        );
    }
}
