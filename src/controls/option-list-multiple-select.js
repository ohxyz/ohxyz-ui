import React from 'react';
import util from '../util.js';
import { OptionsBaseItem } from './options-base.js';

const COMPONENT_NAME = 'options-list';

class OptionListMultipleSelect extends React.Component {

    constructor( props ) {

        super( props );

        this.handleSelect = this.handleSelect.bind( this );

        this.state = {

            options: [],
            className: util.setDefault( props.className, COMPONENT_NAME )
        }
    }

    static getDerivedStateFromProps( nextProps, prevState ) {
        
        return {

            options: nextProps.options
        };
    }

    handleSelect( option ) {

        if ( typeof this.props.onSelect === 'function' ) {

            this.props.onSelect( option );
        }
    }

    render() {

        return (

            <div className={ this.state.className } >
            {
                this.state.options.map( ( option, key ) => {

                    return (

                        <OptionsBaseItem
                            key={key}
                            option={ option } 
                            onClick={ this.handleSelect }
                            classNamePrefix={ this.state.className }
                        />
                    )

                } )
            }
            </div>
        );

    }
}

export default OptionListMultipleSelect;
