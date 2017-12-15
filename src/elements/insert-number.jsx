import InsertBase from './insert-base.jsx';
import util from '../util.js';

class InsertNumber extends InsertBase {

    constructor( props ) {

        super( props );

        this.type = 'number';

        this.min = util.setDefault( props.min, '' );
        this.max = util.setDefault( props.max, '' );

    }
}

export default InsertNumber;