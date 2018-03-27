import React from 'react';
import util from '../util.js';
import { OptionsBase, OptionsBaseItem } from './options-base.js';
import datatype from '../datatype.js';

const COMPONENT_NAME = 'options-checkbox-list';

class OptionsCheckboxItem extends OptionsBaseItem {

    renderListContent() {

        let iconClassName = COMPONENT_NAME + '-icon';
        let labelClassName = COMPONENT_NAME + '-label';
        let textClassName = COMPONENT_NAME + '-text';

        return React.createElement(
            'label',
            { className: labelClassName },
            React.createElement('input', { type: 'checkbox', className: iconClassName, name: this.props.name }),
            React.createElement(
                'span',
                { className: textClassName },
                this.item.text
            )
        );
    }
}

class OptionsCheckboxList extends OptionsBase {

    constructor(props) {

        super(props);

        this.isHiddenValueRequired = false;
        this.classNamePrefix = util.setDefault(props.classNamePrefix, COMPONENT_NAME);
        this.type = datatype.OPTIONS_TYPE_MULTIPLE;
    }

    createOptionsItem(props) {

        return React.createElement(OptionsCheckboxItem, props);
    }
}

export default OptionsCheckboxList;