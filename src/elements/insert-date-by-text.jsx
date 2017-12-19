import React from 'react';
import InsertText from './insert-text.jsx';
import InsertDateBase from './insert-date-base.jsx';
import dataType from '../datatype.js';

// Todo: allow to set min and max for dates
class InsertDateByText extends InsertDateBase {

    constructor( props ) {

        super( props );

        this.handleError = this.handleError.bind( this );
        this.classNamePrefix = 'insert-date-by-text';

        this.errorMessageOfDay = '';
        this.errorMessageOfMonth = '';
        this.errorMessageOfYear = '';

        this.dayRule = [

            { name: dataType.rules.NUMERIC, meta: { error: 'Days must be between 1 and 31', min: 1, max: 31 } }
        ];

        this.monthRule = [

            { name: dataType.rules.NUMERIC, meta: { error: 'Months must be between 1 and 12', min: 1, max: 12 } }

        ];

        this.yearRule = [

            { name: dataType.rules.NUMERIC, meta: { error: 'Years must be between 1000 and 9999', min: 1000, max: 9999 } }

        ]
    }

    handleError( errorMessage ) {

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
        this.handleError( errorMessage );
    }

    handleMonthError( errorMessage ) {

        this.errorMessageOfMonth = errorMessage;
        this.handleError( errorMessage );
    }

    handleYearError( errorMessage ) {

        this.errorMessageOfYear = errorMessage;
        this.handleError( errorMessage );
    }

    render() {

        let insertTextClassNamePrefix = this.classNamePrefix + '-insert-text';

        return (

            <div className={ this.classNamePrefix }>
                <InsertText
                    classNamePrefix={ insertTextClassNamePrefix }
                    rules={ this.dayRule }
                    onError={ this.handleDayError.bind( this ) }
                    hint="DD"
                />
                { this.renderDelimiter() }
                <InsertText
                    classNamePrefix={ insertTextClassNamePrefix }
                    hint="MM"
                    rules={ this.monthRule }
                    onError={ this.handleMonthError.bind( this ) }
                />
                { this.renderDelimiter() }
                <InsertText
                    classNamePrefix={ insertTextClassNamePrefix }
                    hint="YYYY"
                    rules={ this.yearRule }
                    onError={ this.handleYearError.bind( this ) }
                />
            </div>
        );
    }
}

export default InsertDateByText;