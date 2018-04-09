import React from 'react';
import util from '../util.js';
import { OptionsBase, OptionsBaseItem } from './options-base.js';
import datatype from '../datatype.js';

const COMPONENT_NAME = 'options-radio-list';

class OptionsRadioItem extends OptionsBaseItem {

    renderOptionContent() {

        // console.log( 'radio', this.state.option );

        let iconClassName = COMPONENT_NAME + '__icon';
        let textClassName = COMPONENT_NAME + '__text';
        let labelClassName = COMPONENT_NAME + '__label';

        return (

            <label className={ labelClassName }>
                <input 
                    type="radio" 
                    className={ iconClassName } 
                    name={ this.props.name }
                    onClick={ event => event.stopPropagation() }
                />
                <span className={ textClassName }>{ this.state.option.label }</span>
            </label>
        );
    }
}

class OptionsRadioList extends OptionsBase {

    constructor( props ) {

        super( props );

        this.isHiddenValueRequired = false;
        this.classNamePrefix = util.setDefault( props.classNamePrefix, COMPONENT_NAME );
    }

    createOptionsItem( props ) {

        return React.createElement( OptionsRadioItem, props );
    }
}

export default OptionsRadioList;