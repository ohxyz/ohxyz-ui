import React from 'react';
import TextBoxBasic from './textboxbasic.jsx';
import rules from './rules.js';
import utils from './utils.js';

class TextBoxArea extends TextBoxBasic {

    constructor( props ) {

        super( props );

        this.className = "textboxarea";
        this.classNamePrefix = 'textboxarea';
    }
    
    renderInput( ) {

        return (

            <textarea id={ this.inputElementId }
                      className={ this.classNamePrefix + '-textarea' }
                      name={ this.name }
                      onBlur={ this.handleBlur }
                      onKeyUp={ this.handleKeyUp }
                      defaultValue={ this.value }
                      ref={ elem => this.inputElement = elem }
            >
            </textarea>
        )
    }
}

export default TextBoxArea;