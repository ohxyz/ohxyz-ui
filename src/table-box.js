import React from 'react';
import { DropdownBox } from './dropdown-box';

const UTILS = require( './utils.js' );

const ASCEND = 'ascend';
const DESCEND = 'descend';
const INACTIVE = '';

const ROW_TYPE_HEADER = 'header';

class TableBoxHeader extends React.Component {
    
    renderCustomiseButton() {
        
        return <button className="customise">Customise</button>
    }
    
    renderExportButton() {
        
        return <button className="export-all">Export all to CSV</button>
    }
    
    render() {
        
        return (
            <div className="table-box-header clearfix">
                <h1 className="table-box-heading">Search Results</h1>
                <h2 className="number-displayed-heading">
                    Displaying { this.props.numberOfRowsDisplayed.toLocaleString() } Items
                    ( { this.props.numberOfRowsInTotal.toLocaleString() } total )
                </h2>
                { /* this.renderCustomiseButton() */ }
                { /* this.renderExportButton() */ }
            </div>
        );
    }
}

class TableData extends React.Component {
    
    constructor( props ) {
        
        super( props );

        this.handleClick = this.handleClick.bind( this );
        
        this.rowType = this.props.type;
    }
    
    renderSortIconUp() {
        
        return (
        
            <svg className="sort-icon sort-icon-up" viewBox="0 0 34 36.5">
                <polygon points="17,25.9 11.2,20.1 22.8,20.1"/>
                <path d="M11.2,16.4l5.8-5.8l5.9,5.8H11.2z"/>
            </svg>
        )
    }
    
    renderSortIconInactive() {
        
        return (
        
            <svg className="sort-icon sort-icon-inactive" viewBox="0 0 34 36.5">
                <path d="M17,10.6l-5.8,5.8h11.7L17,10.6z M17,25.9l5.9-5.8H11.2L17,25.9z"/>
            </svg>
        )
    }
    
    renderSortIconDown() {
        
        return(
        
            <svg className="sort-icon sort-icon-down" viewBox="0 0 34 36.5">
                <polygon points="17,10.6 11.2,16.4 22.8,16.4"/>
                <path d="M22.8,20.1L17,25.9l-5.8-5.8H22.8z"/>
            </svg>
        )
    }
    
    handleClick( event ) {
        
        if ( this.rowType === ROW_TYPE_HEADER ) {
            
            this.props.onClick( event );
        }

    }
    
    render() {
        
        let sortIcon;
        let rowType = this.props.type;
        let sortOrder = this.props.sortOrder;
        let spanClassName = '';
        let sortedColumnName = this.props.sortedColumnName;
        
        if ( rowType === ROW_TYPE_HEADER ) {
            
            sortIcon = this.renderSortIconInactive();
            
            if ( this.props.data === sortedColumnName ) {
                
                spanClassName = 'table-column-sorted';
                
                if ( sortOrder === ASCEND ) {
                
                    sortIcon = this.renderSortIconUp();
                }
                else if ( sortOrder === DESCEND ) {
                    
                    sortIcon = this.renderSortIconDown();
                }      
            }
        }
        
        return (
            
            <span className={ spanClassName } onClick={ this.handleClick } >
                { this.props.data }
                { sortIcon }
            </span>
        );
    }
}

class TableRow extends React.Component {
    
    constructor( props ) {
        
        super( props );
        this.type = this.props.type;
        this.row = this.props.rowData;
    }
    
    renderHeaderRow() {
        
        return Object.keys( this.row ).map( columnName => 
            
            <TableData type={ this.type }
                       key={ columnName } 
                       data={ columnName }
                       onClick={ this.props.onClick }
                       sortOrder={ this.props.sortOrder }
                       sortedColumnName={ this.props.sortedColumnName }
         
            />
        )
    }
    
    renderContentRow() {

        let row = this.props.rowData;
        
        return Object.keys( row ).map( ( columnName, index ) => 
            
            <TableData key={ index } data={ row[ columnName ] } />
        )
    }
    
    render() {
        
        if ( this.type === ROW_TYPE_HEADER ) {
            
            return (
                
                <li className="table-box-main-header">
                    { this.renderHeaderRow() }
                </li>
            
            );
        }
        else if( this.type === 'row' ) {
            
            return (
                <li>
                    { this.renderContentRow() }
                </li>
            )
        }
    }
}

class TableBoxMain extends React.Component {
    
    constructor( props ) {
        
        super( props );
        this.rows = [];
    }

    renderHeader() {
        
        // console.log( 'col', this.props.sortedColumnName );
        
        return (
            
            <TableRow type="header"
                      sortOrder={ this.props.sortOrder }
                      rowData={ this.rows[0] }
                      onClick={ this.props.onSort }
                      sortedColumnName={ this.props.sortedColumnName }
            />
        )
    }
    
    renderContent() {
        
        // console.log( 'tablerows', this.rows );
        
        return (
        
            this.rows.map( ( row, index ) => {
                // console.log( row, index );
                 
                return (
                
                    <TableRow type="row" 
                              key={ index } 
                              rowData={ row }
                    />
                    
                );
                
            } )
        );
    }
    
    render() {

        this.rows = this.props.tableRows;

        if ( this.rows.length === 0 ) {
            
            return null;
        }
 
        return (
            <ul className="table-box-main">
                { this.renderHeader() }
                { this.renderContent() }
            </ul>
        );
    }
}

class TableBoxFooter extends React.Component {
    
    render() {
        // Use [ '15', '30' ] not [ 15, 30 ], Possible bug in React or Babel
        const numberPerPageOptions = this.props.numberPerPageOptions === undefined
            ? [ '15', '30' ]
            : this.props.numberPerPageOptions;
        
        return (
            <div className="table-box-footer">
                <div className="per-page">
                    No. of items per page 
                    <DropdownBox
                        type="basic"
                        otherClassNames="num-per-page"
                        title={ this.props.numberPerPage }
                        listItems={ numberPerPageOptions }
                        onSelect={ this.props.onNumberPerPageChange }
                    />
                </div>
                <div className="pager">
                    <span className="pager-prev"
                           onClick={ this.props.onPreviousClick } 
                    >
                        &lt;
                    </span>
                    <span className="pager-current">
                        { 
                            this.props.currentPageNumber 
                                + ' of ' 
                                + this.props.totalNumberOfPage 
                        }
                    </span>
                    <span className="pager-next"
                           onClick={ this.props.onNextClick }
                    >
                        &gt;
                    </span>
                </div>
            </div>
        );
    }
}

class TableBox extends React.Component {
    
    constructor( props ) {
        
        super( props );
        
        this.handleNumberPerPageChange = this.handleNumberPerPageChange.bind( this );
        this.handlePreviousClick = this.handlePreviousClick.bind( this );
        this.handleNextClick = this.handleNextClick.bind( this );
        this.handleSort = this.handleSort.bind( this );
        
        this.currentPageNumber = this.props.currentPageNumber;
        this.numberPerPage = parseInt( this.props.numberPerPage, 10 );
        this.totalPage = 0;
        this.rowsAll = this.props.rowData;
        this.rowsDisplayed = [];
        this.sortOrder = INACTIVE;
        this.previousSortedColumnName = '';
        this.currentSortedColumnName = '';
        
        this.state = {
            
            numberPerPage: this.numberPerPage,
            currentPageNumber: this.currentPageNumber,
            rowsDisplayed: this.rowsDisplayed
        };
    }
    
    handleNumberPerPageChange( event ) {
        
        let newNumberPerPage = parseInt( event.target.textContent, 10 );
        
        if ( newNumberPerPage === this.numberPerPage ) {
            return ;
        }
        
        this.numberPerPage = newNumberPerPage;
        this.currentPageNumber = 1;
        this.setState( { 
        
            numberPerPage: this.numberPerPage,
            currentPageNumber: this.currentPageNumber
            
        } );
    }
    
    handlePreviousClick( event ) {
        
        if ( this.currentPageNumber <= 1 ) {
            
            return ;
        }
        
        this.currentPageNumber --;
        
        this.setState( {
        
            currentPageNumber: this.currentPageNumber
        } );
    }
    
    handleNextClick( event ) {
        
        if ( this.currentPageNumber >= this.totalPage ) {
            
            return ;
        }
        
        this.currentPageNumber ++;
        
        this.setState( {
            
           currentPageNumber: this.currentPageNumber 
        
        } );
    }
    
    handleSort( event ) {
        
        let target = event.target;
        
        if ( event.target !== event.currentTarget ) {
            
            target = event.currentTarget;
        }

        this.rows = this.props.rowData;
        
        let key = target.textContent;    
        let key2 = 'Transaction ID';
        
        this.currentSortedColumnName = key;
        
        if ( this.sortOrder === '' ) {
            
            this.sortOrder = ASCEND
        }
        else if ( this.sortOrder === ASCEND ) {
            
            this.sortOrder = DESCEND;
        }
        else if( this.sortOrder === DESCEND ) {
            
            this.sortOrder = ASCEND;
        }
        
        if ( this.currentSortedColumnName !== this.previousSortedColumnName ) {
            
            this.sortOrder = ASCEND;
        }
        
        let sortOptions = {
            
            type: 'quick',
            order: this.sortOrder,
            objectKey: key,
            secondObjectKey: key2
        };
        
        UTILS.sortArrayByObjectKey( sortOptions, this.rows, key, key2 );
        
        this.previousSortedColumnName = this.currentSortedColumnName;
        
        // Call this function to update UI, even it's an empty object
        // But this.rows' value has actually changed.
        this.setState( {
            
            // rowsDisplayed: this.rowsDisplay
            
        } );

    }
    
    
    render () {
        // Assign this.rowsAll here because data is received asynchronously by AJAX
        this.rowsAll = this.props.rowData;

        let numberOfRowsInTotal = this.rowsAll.length;
        let sliceStart = ( this.currentPageNumber - 1 ) * this.numberPerPage;
        let sliceEnd = this.currentPageNumber * this.numberPerPage;

        this.rowsDisplayed = numberOfRowsInTotal <= this.numberPerPage
            ? this.rowsAll
            : this.rowsAll.slice( sliceStart, sliceEnd );
        
        this.totalPage = Math.ceil( numberOfRowsInTotal / this.numberPerPage );
        
        return (
        
            <div className="table-box">
                <TableBoxHeader 
                    numberOfRowsDisplayed={ this.rowsDisplayed.length }
                    numberOfRowsInTotal={ numberOfRowsInTotal }
                />
                <TableBoxMain
                    columnNames={ this.props.columnNames }
                    sortOrder={ this.sortOrder }
                    tableRows={ this.rowsDisplayed }
                    onSort={ this.handleSort }
                    sortedColumnName={ this.currentSortedColumnName }
                />
                <TableBoxFooter
                    className="clearfix"
                    numberPerPage={ this.numberPerPage }
                    currentPageNumber={ this.currentPageNumber }
                    totalNumberOfPage={ this.totalPage }
                    numberPerPageOptions={ this.props.numberPerPageOptions }
                    onNumberPerPageChange={ this.handleNumberPerPageChange }
                    onPreviousClick={ this.handlePreviousClick }
                    onNextClick={ this.handleNextClick }
                />
            </div>
        );
    }
}

export { TableBox }