import React from 'react';
import utils from './utils.js';
import { OptionsBase, OptionsBaseItem } from './options-base.jsx';

const COMPONENT_NAME = 'options-checkbox';

class OptionsCheckboxItem extends OptionsBaseItem {

    renderListContent() {

        let iconClassName = COMPONENT_NAME + '-icon';
        let textClassName = COMPONENT_NAME + '-text';

        return (

            <React.Fragment>
                <span className={ iconClassName } />
                <span className={ textClassName }>{ this.text }</span>
            </React.Fragment>
        );
    }
}

class OptionsCheckbox extends OptionsBase {

    constructor( props ) {

        super( props );

        this.classNamePrefix = utils.setDefault( props.classNamePrefix, COMPONENT_NAME );
    }

    createOptionsItem( props ) {

        return React.createElement( OptionsCheckboxItem, props );
    }

}

export default OptionsCheckbox;