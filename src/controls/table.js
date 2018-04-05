import React from 'react';
import util from '../util.js';

export default class Table extends React.Component {

    constructor( props ) {

        super( props );

        this.head = util.setDefault( props.head, [] );
        this.rows = util.setDefault( props.rows, [] );
        this.foot = util.setDefault( props.foot, [] );

        this.classNamePrefix = 'table';

    }

    renderHead() {

        let className = this.classNamePrefix + '__head';
        let tableDataClassName = className + '__data';

        return (

            <div className={ className }>
            {

                this.head.map( ( text, index ) => {

                    return (

                        <span className={ tableDataClassName } key={ index }>
                            { text }
                        </span>
                    )

                } )
            }
            </div>
        )
    }

    renderBody() {

        return (

            <React.Fragment>
            {
                this.rows.map( ( row, index ) => {

                    return this.renderRow( row, index );

                } )
            }
            </React.Fragment>
        );
    }


    renderRow( itemsInRow, rowIndex ) {

        if ( Array.isArray( itemsInRow ) === false ) {

            throw new Error( 'Items in a row should be an array' );
        }

        let className = this.classNamePrefix + '__row';
        let tableDataClassName = className + '__data';

        return (

            <div className={ className } key={ rowIndex }>
            {
                itemsInRow.map( ( item, index ) => {

                    return (

                        <span className={ tableDataClassName } key={ index }>{ item }</span>
                    );

                } )
            }
            </div>
        );
    }

    renderFoot() {

        return null;
    }

    render() {

        return (

            <div className={ this.classNamePrefix }>
                { this.renderHead() }
                { this.renderBody() }
                { this.renderFoot() }
            </div>
        );
    }
}