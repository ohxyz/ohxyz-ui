import React from 'react';
import util from '../util.js';
import dataType from '../datatype.js';
import { Option } from '../helpers/datatype.js';

const COMPONENT_NAME = 'options-base';

function makeClassName( option, classNamePrefix ) {
        
    let className = classNamePrefix + '__item';

    if ( option.selected === true ) {

        return className + ' ' + className + '--selected';
    }
    else {

        return className;
    }
}


class OptionsBaseItem extends React.Component {

    constructor( props ) {

        super( props );
        this.handleClick = this.handleClick.bind( this );

        this.state = {

            classNamePrefix: util.setDefault( props.classNamePrefix, COMPONENT_NAME ),
            className: props.classNamePrefix + '__item'

        };
    }

    static getDerivedStateFromProps( nextProps, prevState ) {

        // console.log( 'next- ', nextProps );
        // console.log( 'prev-s', prevState );

        let option = nextProps.option;
        let className = makeClassName( option, prevState.classNamePrefix );
        
        return {

            option: option,
            className: className
        };
    }

    handleClick( event ) {

        let option = new Option( this.state.option );
        option.selected = !this.state.option.selected;

        let className = makeClassName( option, this.state.classNamePrefix );

        console.log( 'click', option);

        if ( typeof this.props.onClick === 'function' ) {

            // this.props.onClick( option );
        }

        this.setState( {

            option: option,
            className: className

        } );

    }

    renderOptionContent() {

        return this.state.option.label;
    }

    render() {

        return (

            <div className={ this.state.className } onClick={ this.handleClick } >
                { this.renderOptionContent() }
            </div>
        );
    }
}


class OptionsBase extends React.Component {

    constructor( props ) {

        super( props );

        this.handleSelect = this.handleSelect.bind( this );

        this.name = util.setDefault( props.name, '' );
        this.type = util.setDefault( props.type, dataType.OPTIONS_TYPE_SINGLE );
        this.options = util.setDefault( props.options, [] );

        this.classNamePrefix = util.setDefault( props.classNamePrefix, COMPONENT_NAME );
        this.onPropsSelect = util.setDefault( props.onSelect, new Function() );

        this.optionSelected = new Option();
        this.lastOptionSelected = new Option();
        this.optionsSelected = [];

        this.isHiddenValueRequired = true;

        // If type is single, but more than one option's selected properties are true,
        // then only last one is selected.
        this.makeOptions();

        this.state = {

            optionSelected: this.optionSelected
        };

    }

    makeOptions() {

        for ( let i = 0; i < this.options.length; i ++ ) {

            // console.log( 'x', this.options[ i ], typeof this.options[ i ] );

            let option = new Option( this.options[ i ] );

            this.assignOptionsSelected( option );
            this.options[ i ] = option;
        }

        // console.log( this.options );
    }

    assignOptionsSelected( option ) {

        if ( option.selected === false ) {

            return;
        }

        if ( this.type === dataType.OPTIONS_TYPE_SINGLE ) {

            this.selecteNewOption( option );
        }
        else if ( this.type === dataType.OPTIONS_TYPE_MULTIPLE ) {

            this.optionsSelected.push( option );
        }
    }

    selecteNewOption( option ) {

        this.lastOptionSelected = this.optionSelected;
        this.lastOptionSelected.selected = false;

        this.optionSelected = option;
        this.optionSelected.selected = true;

        this.optionsSelected[ 0 ] = option;
    }


    handleSelect( option ) {

        if ( this.type === dataType.OPTIONS_TYPE_SINGLE ) {

            return this.hanldeSingleSelect( option );

        }
        else if ( this.type === dataType.OPTIONS_TYPE_MULTIPLE ) {

            return this.handleMutlipleSelect( option );
        }

    }

    handleMutlipleSelect( option ) {

        option.selected = !option.selected;

        util.toggleArrayItem( option, this.optionsSelected );

        this.onPropsSelect( option );

        this.setState( { 

            optionsSelected: this.optionsSelected

        } );

    }

    hanldeSingleSelect( option ) {

        this.selecteNewOption( option );
        this.onPropsSelect( option );

        this.setState( {

            optionSelected: this.optionSelected
        } );
    }

    renderHiddenInputs() {

        if ( this.isHiddenValueRequired === false ) {

            return null;
        }

        return (

            <React.Fragment>
            {
                this.optionsSelected.map( ( option, key ) => { 

                    return <input type="hidden" key={ key } name={ this.name } value={ option.value } />
                } )
            }
            </React.Fragment>

        );
    }

    createOptionsItem( propsObject ) {

        return React.createElement( OptionsBaseItem, propsObject );
    }

    render() {

        let options = util.setDefault( this.props.options, this.options );

        return (

            <div className={ this.classNamePrefix } >
                { this.renderHiddenInputs() }
                {
                    options.map( ( option, key ) => {

                        let propsObject = {

                            key: key,
                            option: option,
                            onClick: this.handleSelect,
                            classNamePrefix: this.classNamePrefix,
                        };

                        return this.createOptionsItem( propsObject );

                    } )
                }
            </div>
        );
    }
}

export default OptionsBase;

export {

    OptionsBaseItem,
    OptionsBase
};