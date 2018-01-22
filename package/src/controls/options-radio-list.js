import React from 'react';
import util from '../util.js';
import { OptionsBase, OptionsBaseItem } from './options-base.js';
import datatype from '../datatype.js';

const COMPONENT_NAME = 'options-radio-list';

class OptionsRadioItem extends OptionsBaseItem {

    renderListContent() {

        let iconClassName = COMPONENT_NAME + '-icon';
        let textClassName = COMPONENT_NAME + '-text';
        let labelClassName = COMPONENT_NAME + '-label';

        return (

            <label className={ labelClassName }>
                <input type="radio" className={ iconClassName } name={ this.props.name } />
                <span className={ textClassName }>{ this.item.text }</span>
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