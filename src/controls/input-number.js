import InsertBase from './insert-base.js';

class InputNumber extends InsertBase {

    constructor( props ) {

        super( props );

        this.type = 'number';
    }
}

export default InputNumber;