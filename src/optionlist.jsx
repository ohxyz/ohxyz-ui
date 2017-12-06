import React from 'react';
import BasicFormComponent from './basic-form-component.jsx';
import utils from './utils.js';

const COMPONENT_NAME = 'optionlist';
const DEFAULT_OPTION_ITEM_TEXT = 'Option Item';

class OptionItem extends React.Component {

    constructor( props ) {

        super( props );

        this.name = utils.setDefault( props.name, '' );
        this.text = utils.setDefault( props.text, DEFAULT_OPTION_ITEM_TEXT );
        this.value = utils.setDefault( props.value, '' );
        this.isSelected = utils.setDefault( props.isSelected, false );
    }

    render() {

        let className = COMPONENT_NAME + '-item';

        className += this.isSelected === true ? ' is-selected' : '';

        return (

            <li className={ className } >
                { this.text }
            </li>
        );
    }

}

class OptionList extends BasicFormComponent {

    constructor( props ) {

        super( props );

        this.className = COMPONENT_NAME;
        this.classNamePrefix = COMPONENT_NAME;

        this.items = utils.setDefault( props.items, [] );

    }

    renderMain() {

        let className = COMPONENT_NAME + '-list';

        let ul = 

            <ul className={ className } >
            {
                this.items.map( ( item, key ) => {

                    return (

                        <OptionItem key={ key } 
                                    value={ item.value }
                                    text={ item.text }
                                    name={ item.name } 
                                    isSelected={ item.isSelected }
                        />
                    );

                } )
            }
            </ul>;

        return ul;
    }
}

export default OptionList