import React from 'react';
import utils from './utils.js';
import { OptionsBase, OptionsBaseItem } from './options-base.jsx';

const COMPONENT_NAME = 'options-radio';

class OptionsRadioItem extends OptionsBaseItem {

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

class OptionsRadio extends OptionsBase {

    constructor( props ) {

        super( props );

        this.classNamePrefix = utils.setDefault( props.classNamePrefix, COMPONENT_NAME );

    }

    createOptionsItem( props ) {

        return React.createElement( OptionsRadioItem, props );
    }

}

export default OptionsRadio;