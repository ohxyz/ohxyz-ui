import React from 'react';
import BasicFormComponent from './basic-form-component.jsx';
import utils from './utils.js';

class Dropdown extends BasicFormComponent {

    constructor( props ) {

        super( props );

        this.handleHeaderClick = this.handleHeaderClick.bind( this );
        this.handleClickOutside = this.handleClickOutside.bind( this );

        this.classNamePrefix = 'dropdown';
        this.className = 'dropdown';

        this.isOpen = false;

        this.state = {

            isOpen: false
        }
    }

    close() {

        this.isOpen = false;
        this.makeClassName();

        this.setState( { 

            isOpen: false
        } );

    }

    makeClassName() {

        if ( this.isOpen === true ) {

            this.className = this.className + ' is-open';
        }
        else {

            this.className = this.className.replace( ' is-open', '' );
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

        return this.hint;
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

    renderMain() {

        return (

            <div className={ this.classNamePrefix + '-main' }>
                { this.renderHeader() }
                { this.renderContentIfOpen() }
            </div>
        );
    }

    renderHiddenInput() {

        return null;
    }

    handleClickOutside( event ) {

        if ( utils.isDescendant( event.target, this.domElement ) === false ){
                        
            this.close();
        }
    }

    componentDidMount() {
        
        document.addEventListener( 'mouseup', this.handleClickOutside );
    }
    
    componentWillUnmount() {

        document.removeEventListener( 'mouseup', this.handleClickOutside );

    }

}

export default Dropdown;