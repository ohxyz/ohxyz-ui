import React from 'react';
import BasicFormComponent from './basic-form-component.jsx';
import utils from './utils.js';

let componentName = 'dropdown';

class DropdownItem extends React.Component {

    render () {

        let className = componentName + '-item';

        return ( 
            <li className={ className }>
                { this.props.value }
            </li>
        )
    }
}

class Dropdown extends BasicFormComponent {

    constructor( props ) {

        super( props );

        this.classNamePrefix = componentName;
        this.items = utils.setDefault( props.items, [] );
    }


    renderHeader() {

        return <div className={ this.classNamePrefix + '-header' }>Select</div>
    }

    renderContent() {

        console.log( this.items );

        return (

            <div className={ this.classNamePrefix + '-content' }>
                <ul className={ this.classNamePrefix + '-list' }>
                { 
                    this.items.map( ( item, key ) => {

                        return <DropdownItem key={ key } value={ item } />

                    } )
                }
                </ul>
            </div>
        )
    }

    renderFooter() {

        return <div className={ this.classNamePrefix + '-footer' }></div>
    }

    renderContainer() {

        return (

            <div className={ this.classNamePrefix + '-container' }>
                { this.renderHeader() }
                { this.renderContent() }
                { this.renderFooter() }
            </div>
        );
    }

    render() {

        let className = this.classNamePrefix;
        let labelClassName = this.classNamePrefix + '-title';

        return (

            <div className={ className }>
                <label className={ labelClassName }>{ this.title }</label>
                { this.renderContainer() }
                { this.renderErrorMessageIfInvalid() }
                { this.renderDescription() }
            </div>
        );
    }
}

export default Dropdown;