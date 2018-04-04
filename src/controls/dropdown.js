import React from 'react';
import util from '../util.js';

class Dropdown extends React.Component {

    constructor( props ) {

        super( props );

        this.handleHeaderClick = this.handleHeaderClick.bind( this );
        this.handleClickOutside = this.handleClickOutside.bind( this );

        this.id = util.setDefault( props.id, util.generateRandomString() );
        this.hint = util.setDefault( props.hint, 'Dropdown');
        this.name = util.setDefault( props.name, '' );
        this.value =util.setDefault( props.value, '' );

        this.classNamePrefix = 'dropdown';

        this.domElement = null;
        this.isOpen = false;

        this.state = {

            isOpen: false
        };
    }

    close() {

        this.isOpen = false;

        this.setState( { 

            isOpen: false
        } );

    }

    makeClassName() {

        this.className = this.classNamePrefix;

        let classNameModifier = this.className + '--open';
        let classNameModifierWithSpace = ' ' + classNameModifier;

        if ( this.isOpen === true ) {

            this.className = this.className + classNameModifierWithSpace;
        }
        else {

            this.className = this.className.replace( classNameModifierWithSpace, '' );
        }

    }

    handleHeaderClick() {

        this.isOpen = !this.isOpen;

        this.setState( {

            isOpen: this.isOpen

        } );
    }

    renderHeader() {

        return ( 

            <div className={ this.classNamePrefix + '__header' }
                 onClick={ this.handleHeaderClick }
            >
                { this.renderHeaderContent() }
            </div>
        );
    }

    renderHeaderContent() {

        return this.hint;
    }

    renderHiddenInput() {

        if ( this.name === '' ) {

            return null;
        }

        return <input type="hidden" name={ this.name } value={ this.value } />
    }

    renderContentIfOpen() {

        if ( this.isOpen === true ) {

            return <div className={ this.classNamePrefix + '__content' }>{ this.renderInnerContent() }</div>;
        }
        else {

            return null;
        }
    }

    renderInnerContent() {

        return null;
    }

    handleClickOutside( event ) {

        if ( util.isDescendant( event.target, this.domElement ) === false ){
                        
            this.close();
        }
    }

    componentDidMount() {
        
        document.addEventListener( 'mouseup', this.handleClickOutside );
    }
    
    componentWillUnmount() {

        document.removeEventListener( 'mouseup', this.handleClickOutside );

    }

    render() {

        this.makeClassName();

        return (

            <div className={ this.className }
                 id={ this.id }
                 ref={ ( elem ) => { this.domElement = elem; }  } 
            >
                { this.renderHiddenInput() }
                { this.renderHeader() }
                { this.renderContentIfOpen() }
            </div>
        );
    }

}

export default Dropdown;