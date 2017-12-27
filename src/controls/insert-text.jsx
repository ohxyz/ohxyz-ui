import InsertBase from './insert-base.jsx';

class InsertText extends InsertBase {

    constructor( props ) {

        super( props );

        this.type = 'text';
    }
}

export default InsertText;