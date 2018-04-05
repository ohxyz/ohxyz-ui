import React from 'react';
import util from '../util.js';

export default class Table extends React.Component {

    constructor( props ) {

        super( props );
        
        this.classNamePrefix = 'table';
    }

    renderHead() {

        let itemsInHead = util.setDefault( this.props.head, [] );

        let className = this.classNamePrefix + '__head';
        let tableDataClassName = className + '__data';

        return (

            <div className={ className }>
            {

                itemsInHead.map( ( text, index ) => {

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

        let itemsInRow = util.setDefault( this.props.rows, [] );

        return (

            <React.Fragment>
            {
                itemsInRow.map( ( row, index ) => {

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