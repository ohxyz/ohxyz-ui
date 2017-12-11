import React from 'react';
import InsertBase from './insert-base.jsx';

class InsertTextArea extends InsertBase {

    constructor( props ) {

        super( props );

        this.type = 'textarea';
        this.classNamePrefix = 'insert-textarea';
    }

    renderInput() {

        return (

            <textarea id={ this.inputElementId }
                      className={ this.className }
                      placeholder={ this.hint }
                      name={ this.name }
                      onBlur={ this.handleBlur }
                      onKeyUp={ this.handleKeyUp }
                      defaultValue={ this.value }
                      ref={ elem => this.inputElement = elem }
            >
            </textarea>
        );
    }
}

export default InsertTextArea;