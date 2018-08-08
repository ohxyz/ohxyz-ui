import InsertBase from './insert-base.js';

class InputText extends InsertBase {

    constructor( props ) {

        super( props );

        this.type = 'text';
    }
}

export default InputText;