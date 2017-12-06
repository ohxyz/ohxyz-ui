import React from 'react';
import BasicFormComponent from './basic-form-component.jsx';
import DropdownList from './DropdownList.jsx';
import utils from './utils.js';

const COMPONENT_NAME = 'date-dropdownlist'

class DateDropdownList extends BasicFormComponent {

    constructor( props ) {

        super( props );

        this.className = COMPONENT_NAME;
        this.classNamePrefix = COMPONENT_NAME;
    }

    renderMain() {

        let days = [ 1, 2, 3, 4 ];
        let months = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ];
        let years = [ 2015, 2016, 2017 ];

        return ( 

            <div className={ this.classNamePrefix + '-main' }>
                <DropdownList classNamePrefix={ this.classNamePrefix }
                              hint="DD" 
                              items={ days } 
                />
                <span class={ this.classNamePrefix + '-delimiter' }>&#47;</span>
                <DropdownList classNamePrefix={ this.classNamePrefix }
                              hint="MM" 
                              items={ months } 
                />
                <span class={ this.classNamePrefix + '-delimiter' }>&#47;</span>
                <DropdownList classNamePrefix={ this.classNamePrefix }
                              hint="YYYY" 
                              items={ years } 
                />

            </div>

        );


    }
}

export default DateDropdownList;