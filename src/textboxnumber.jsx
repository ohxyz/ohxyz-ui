import React from 'react';
import TextBoxBasic from './textboxbasic.jsx';
import rules from './rules.js';
import utils from './utils.js';

class TextBoxNumber extends TextBoxBasic {

    constructor( props ) {

        super( props );

        this.className = "textboxnumber";
        this.classNamePrefix = 'textboxnumber';
    }

    renderInput() {

        return (

            <input id={ this.inputElementId }
                   type="number"
                   className={ this.classNamePrefix + '-number' }
                   name={ this.name }
                   placeholder={ this.hint }
                   defaultValue={ this.value }
                   onBlur={ this.handleBlur }
                   onKeyUp={ this.handleKeyUp }
                   ref={ elem => this.inputElement = elem }
            />
        );
    }
}

export default TextBoxNumber;