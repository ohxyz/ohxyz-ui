import InsertBase from './insert-base.js';

class InsertText extends InsertBase {

    constructor(props) {

        super(props);

        this.type = 'text';
    }
}

export default InsertText;