import InsertBase from './insert-base.js';

export default class InsertText extends InsertBase {

    constructor( props ) {

        super( props );

        this.type = 'text';
    }
}