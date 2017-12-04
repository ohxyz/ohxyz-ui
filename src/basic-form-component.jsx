import React from 'react';
import utils from './utils.js';

class BasicFormComponent extends React.Component {

    constructor( props ) {

        super( props );

        // Not UUID
        let randomString = Math.random().toString( 36 ).slice( 2 );
        
        this.id = utils.setDefault( props.id, randomString );
        this.className = '';
        this.name = utils.setDefault( props.name, randomString );
        this.title = utils.setDefault( props.title, 'Fill in here' );
        this.inputValue = utils.setDefault( props.value, '' );
        this.description = utils.setDefault( props.description, '' );
        this.rules = utils.setDefault( props.rules, null );

        this.isFocused = false;
        this.firstTimeFocused = true;
        this.isInputValueValid = true;
        this.requireValidation = this.rules === null ? false : true;
    }

}

export default BasicFormComponent;