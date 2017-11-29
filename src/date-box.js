import React from 'react';
import validator from 'validator';

const UTILS = require( './utils.js' );

class DateBox extends React.Component {
    
    constructor( props ) {
        
        super( props );
        this.toggleCalendar = this.toggleCalendar.bind( this );
        this.handleInputBoxChange = this.handleInputBoxChange.bind( this );
        this.handleInputBoxFocus = this.handleInputBoxFocus.bind( this );
        this.handleInputBoxBlur = this.handleInputBoxBlur.bind( this );
        this.handleClickOutside = this.handleClickOutside.bind( this );
        this.handleDatePicked = this.handleDatePicked.bind( this );
        
        this.inputBox = null;
       
        this.datePicked = UTILS.setDefault( props.value, '' );
        this.title = UTILS.setDefault( props.title, '' );
        this.name = UTILS.setDefault( props.name, '' );
        this.allowEmpty = true;
        this.isValidDate = true;
            
        this.showCalendar = false;
        this.dateBoxClassName = '';
        
        this.isErrorMessageDefined = false;
        
        if ( props.error === undefined ) {
            
            this.errorMessage = 'yyyy-mm-dd';
            this.isErrorMessageDefined = false;
        }
        else {
            
            this.errorMessage = props.error;
            this.isErrorMessageDefined = true;
        }
        
        this.setDateBoxClassName();
        
        this.dom = null;
        DateBox.boxes.push( this );
        
        this.state = {
            
            datePicked: this.datePicked,
            showCalendar: this.showCalendar
        };

    }
    
    isDatePicked() {
        
        if ( this.datePicked === '' ) {
            
            return false;
        }
        
        return true;
    }
        
    setDateBoxClassName() {
        
        this.dateBoxClassName = 'date-box';
        
        if ( this.isDatePicked() === true ) {
            
            this.dateBoxClassName += ' is-picked';
        }
        
        if ( this.showCalendar === true ) {
            
            this.dateBoxClassName += ' is-opened';
            
        }
        
        if ( this.isValidDate === false ) {
            
            this.dateBoxClassName += ' is-invalid';
        }
        
    }
    
    toggleCalendar( event ) {
        
        if ( event.target === this.inputBox ) {
            
            return;
        }
        
        this.showCalendar = !this.showCalendar;
        this.datePicked = this.inputBox.value;
        this.setDateBoxClassName();
        
        this.setState( {
            
            showCalendar: this.showCalendar
            
        } );
        
    }
    
    close() {
        
        this.showCalendar = false;
        this.setDateBoxClassName();
        
        this.setState( {
            
            showCalendar: false
        } );
    }
    
    validateDate() {
        
        let sanitizedDate = this.datePicked.replace( /\s/g, '').slice( 0, 10 );
        let isValid = false;
        
        if ( this.allowEmpty === true && sanitizedDate === '' ) {
            
            isValid = true;
        }
        else if ( sanitizedDate.length !== 10 ) {
        
            isValid = false;
        }
        else {
            // February 30 returns true
            isValid = validator.isISO8601( sanitizedDate );
        }
        
        this.isValidDate = isValid;
    }

    handleInputBoxChange() {
        console.log( 'changed' );
        
        this.datePicked = this.inputBox.value;
        
        this.validateDate();
        this.setDateBoxClassName();
        
        // console.log( this.datePicked );
        
        if ( this.props.onChange !== undefined ) {
            
            this.props.onChange( this.inputBox, { 
            
                name: this.name,
                value: this.datePicked
                
            } );
                
        }
        
        this.setState( {
            
            datePicked: this.datePicked
            
        } ); 
        
    }
    
    handleInputBoxFocus( event ) {
        
        let target = event.target;
        let value = target.value;
        
        this.datePicked = value;

        // console.log( 'focus', value );
    }
    
    handleInputBoxBlur( ) {
        
        this.validateDate();
        this.setDateBoxClassName();
        
        this.setState( {
            
            isValidDate: this.isValidDate
            
        } );
        
    }
    
    renderCalendarIcon() {
        
        return (
        
            <svg className="svg-calendar-icon" viewBox="0 0 34 36.5">
                <path d="M24.3,29.9H9.7c-2,0-3.6-1.6-3.6-3.6V13.1c0-1.6,1.1-3,2.6-3.5V11c0,1.6,1.3,2.9,2.9,2.9h0.7
                    c1.6,0,2.9-1.3,2.9-2.9V9.5h3.6V11c0,1.6,1.3,2.9,2.9,2.9h0.7c1.6,0,2.9-1.3,2.9-2.9V9.7c1.5,0.5,2.6,1.8,2.6,3.5v13.1
                    C27.9,28.3,26.3,29.9,24.3,29.9z M24.7,17.2H9.3v7.3c0,1.2,1,2.2,2.2,2.2h10.9c1.2,0,2.2-1,2.2-2.2V17.2z M22.1,12.4
                    c-1,0-1.8-0.8-1.8-1.8V8.4c0-1,0.8-1.8,1.8-1.8c1,0,1.8,0.8,1.8,1.8v2.2C23.9,11.6,23.1,12.4,22.1,12.4z M11.9,12.4
                    c-1,0-1.8-0.8-1.8-1.8V8.4c0-1,0.8-1.8,1.8-1.8c1,0,1.8,0.8,1.8,1.8v2.2C13.7,11.6,12.9,12.4,11.9,12.4z"/>
            </svg>
        
        );
    }
    
    renderErrorMessageIfInvalid() {
        
        if ( this.isValidDate === false ) {

            return (
            
                <span className="date-box-error-message">
                    { this.errorMessage }
                </span>
            )
        }
        
        return '';
    }

    render () {
        
        return (
        
            <div id={ this.props.id } 
                 className={ this.dateBoxClassName }
                 ref={ self => this.dom = self }
            >
                <div className="date-box-header"
                     onClick={ this.toggleCalendar }
                >
                    { this.renderCalendarIcon() }
                    <div className="date-box-title">
                        <span>{ this.props.title }</span>
                        { this.renderErrorMessageIfInvalid() }
                    </div>
                    <input id={ this.props.id + '-input-box' }
                       className="date-box-picked"
                       type="text"
                       value={ this.datePicked }
                       name={ this.props.name }
                       onChange={ this.handleInputBoxChange }
                       onFocus={ this.handleInputBoxFocus }
                       onBlur={ this.handleInputBoxBlur }
                       ref={ self => this.inputBox = self }
                    />
                </div>
                <div className="date-box-content" >
                </div>
            </div>
        );
    }
    
    componentDidUpdate() {
        
        if ( this.showCalendar === true ) {

            this.inputBox.focus();
        }
    }

    handleClickOutside( event ) {

        if ( UTILS.isDescendant( event.target, this.dom ) === false ){
                        
            this.close();
        }
    }
    
    handleDatePicked() {
        
        this.handleInputBoxChange();
        this.close();
    }

    componentDidMount() {
  
        window.EXTERNAL_SCRIPTS.initPikaday( this.dom, this.handleDatePicked  );
        document.addEventListener( 'mouseup', this.handleClickOutside );

    }
    
    componentWillUnmount() {

        document.removeEventListener( 'mouseup', this.handleClickOutside );

    } 
}

DateBox.boxes = [];

document.addEventListener( 'DOMContentLoaded' , () => {
    
    window[ 'COMPONENTS' ] = UTILS.setDefault( window[ 'COMPONENTS' ], {} )
    window[ 'COMPONENTS' ].dateBoxes = DateBox.boxes;
    
} );


export { DateBox };