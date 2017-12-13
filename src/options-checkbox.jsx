import React from 'react';
import util from './util.js';
import { OptionsBase, OptionsBaseItem } from './options-base.jsx';
import datatype from './datatype.js';

const COMPONENT_NAME = 'options-checkbox';

class OptionsCheckboxItem extends OptionsBaseItem {

    renderListContent() {

        let iconClassName = COMPONENT_NAME + '-icon';
        let textClassName = COMPONENT_NAME + '-text';

        return (

            <React.Fragment>
                <span className={ iconClassName } />
                <span className={ textClassName }>{ this.item.text }</span>
            </React.Fragment>
        );
    }
}

class OptionsCheckbox extends OptionsBase {

    constructor( props ) {

        super( props );

        this.classNamePrefix = util.setDefault( props.classNamePrefix, COMPONENT_NAME );
        this.type = datatype.OPTIONS_TYPE_MULTIPLE;
    }

    createOptionsItem( props ) {

        return React.createElement( OptionsCheckboxItem, props );
    }
}

export default OptionsCheckbox;