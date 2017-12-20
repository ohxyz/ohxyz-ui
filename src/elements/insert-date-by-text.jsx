import React from 'react';
import InsertText from './insert-text.jsx';
import InsertDateBase from './insert-date-base.jsx';
import dataType from '../datatype.js';

const DAY_ERROR_MESSAGE = 'Day must be digits only, between 1 and 31';
const MONTH_ERROR_MESSAGE = 'Month must be digits only, between 1 and 12';
const YEAR_ERROR_MESSAGE = 'Year must be digits only, between 1000 and 9999';

// Todo: allow to set min and max for dates
class InsertDateByText extends InsertDateBase {

    constructor( props ) {

        super( props );

        this.classNamePrefix = 'insert-date-by-text';

        this.errorMessageOfDay = '';
        this.errorMessageOfMonth = '';
        this.errorMessageOfYear = '';

        this.day = 0;
        this.month = 0;
        this.year = 0;

        this.dayRule = [

            { name: dataType.rules.NUMERIC, meta: { error: DAY_ERROR_MESSAGE, min: 1, max: 31 } }
        ];

        this.monthRule = [

            { name: dataType.rules.NUMERIC, meta: { error: MONTH_ERROR_MESSAGE, min: 1, max: 12 } }
        ];

        this.yearRule = [

            { name: dataType.rules.NUMERIC, meta: { error: YEAR_ERROR_MESSAGE, min: 1000, max: 9999 } }
        ];
    }

    handleError() {

        // If there are multiple errors, always show day error first, year error last.

        if ( this.errorMessageOfDay !== '' ) {

            this.errorMessage = this.errorMessageOfDay;
        }
        else if ( this.errorMessageOfMonth !== '' ) {

            this.errorMessage = this.errorMessageOfMonth;
        }
        else if ( this.errorMessageOfYear !== '' ) {

            this.errorMessage = this.errorMessageOfYear;
        }
        else {

            this.errorMessage = '';
        }

        // console.log( this.errorMessageOfDay, this.errorMessageOfMonth, this.errorMessage );

        this.props.onError( this.errorMessage );
    }

    handleDayError( errorMessage ) {

        this.errorMessageOfDay = errorMessage;
        this.handleError();
    }

    handleMonthError( errorMessage ) {

        this.errorMessageOfMonth = errorMessage;
        this.handleError();
    }

    handleYearError( errorMessage ) {

        this.errorMessageOfYear = errorMessage;
        this.handleError();
    }

    handleChange( event, dayMonthOrYear ) {

        this[ dayMonthOrYear ] = event.target.value;

        this.value = this.makeValue();

        console.log( '8888', this.value );
    }

    makeValue() {

        return `${ this.day }/${ this.month }/${ this.year }`;
    }

    renderHiddenInput() {

        return <input type="hidden" name={ this.name } value={ this.value } />
    }

    render() {

        let insertTextClassNamePrefix = this.classNamePrefix + '-insert-text';

        return (

            <div className={ this.classNamePrefix }>
                { this.renderHiddenInput() }
                <InsertText
                    classNamePrefix={ insertTextClassNamePrefix }
                    rules={ this.dayRule }
                    onError={ this.handleDayError.bind( this ) }
                    onChange={ ( event ) => { this.handleChange( event, 'day') } }
                    hint="DD"
                />
                { this.renderDelimiter() }
                <InsertText
                    classNamePrefix={ insertTextClassNamePrefix }
                    hint="MM"
                    rules={ this.monthRule }
                    onChange={ ( event ) => { this.handleChange( event, 'month') } }
                    onError={ this.handleMonthError.bind( this ) }
                />
                { this.renderDelimiter() }
                <InsertText
                    classNamePrefix={ insertTextClassNamePrefix }
                    hint="YYYY"
                    rules={ this.yearRule }
                    onChange={ ( event ) => { this.handleChange( event, 'year') } }
                    onError={ this.handleYearError.bind( this ) }
                />
            </div>
        );
    }
}

export default InsertDateByText;