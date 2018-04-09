import React from 'react';
import util from '../util.js';
import { OptionsBase, OptionsBaseItem } from './options-base.js';
import datatype from '../datatype.js';

const COMPONENT_NAME = 'options-checkbox-list';

class OptionsCheckboxItem extends OptionsBaseItem {

    renderOptionContent() {

        let iconClassName = COMPONENT_NAME + '__icon';
        let labelClassName = COMPONENT_NAME + '__label';
        let textClassName = COMPONENT_NAME + '__text';

        return (

            <label className={ labelClassName }>
                <input type="checkbox" 
                    className={ iconClassName } 
                    name={ this.props.name } 
                    onClick={ event => event.stopPropagation() }
                />
                <span className={ textClassName }>{ this.state.option.label }</span>
            </label>
        );
    }
}

class OptionsCheckboxList extends OptionsBase {

    constructor( props ) {

        super( props );

        this.isHiddenValueRequired = false;
        this.classNamePrefix = util.setDefault( props.classNamePrefix, COMPONENT_NAME );
        this.type = datatype.OPTIONS_TYPE_MULTIPLE;
    }

    createOptionsItem( props ) {

        return React.createElement( OptionsCheckboxItem, props );
    }
}

export default OptionsCheckboxList;