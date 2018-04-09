import React from 'react';
import InsertBase from './insert-base.js';

class InsertTextArea extends InsertBase {

    constructor( props ) {

        super( props );

        this.type = 'textarea';
        this.classNamePrefix = 'insert-textarea';
    }

    renderInput() {

        return (

            <textarea id={ this.domElementId }
                      className={ this.className }
                      placeholder={ this.hint }
                      name={ this.name }
                      onBlur={ this.handleBlur.bind( this ) }
                      onChange={ this.handleChange.bind( this ) }
                      defaultValue={ this.value }
                      ref={ elem => this.domElement = elem }
            >
            </textarea>
        );
    }
}

export default InsertTextArea;