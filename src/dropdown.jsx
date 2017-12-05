import React from 'react';
import BasicFormComponent from './basic-form-component.jsx';
import utils from './utils.js';


class Dropdown extends BasicFormComponent {

    constructor( props ) {

        super( props );

        this.handleHeaderClick = this.handleHeaderClick.bind( this );

        this.classNamePrefix = 'dropdown';

        this.isOpen = false;

        this.state = {

            isOpen: false
        }
    }

    makeClassName() {

        if ( this.isOpen === true ) {

            this.className = this.classNamePrefix + ' is-open';
        }
        else {

            this.className = this.className.replace( 'is-open', '' );
        }

    }

    handleHeaderClick() {

        this.isOpen = !this.isOpen;
        this.makeClassName();

        this.setState( {

            isOpen: this.isOpen

        } );
    }

    renderHeader() {

        return ( 

            <div className={ this.classNamePrefix + '-header' }
                 onClick={ this.handleHeaderClick }
            >
                { this.renderHeaderContent() }
            </div>
        );
    }

    renderHeaderContent() {

        return 'Drop down';
    }

    renderContentIfOpen() {

        if ( this.isOpen === true ) {

            return <div className={ this.classNamePrefix + '-content' }>{ this.renderInnerContent() }</div>
        }
        else {

            return null;
        }
    }

    renderInnerContent() {

        return null;
    }

    renderContainer() {

        return (

            <div className={ this.classNamePrefix + '-container' }>
                { this.renderHeader() }
                { this.renderContentIfOpen() }
            </div>
        );
    }

    render() {

        let labelClassName = this.classNamePrefix + '-title';
        let className = this.classNamePrefix;

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