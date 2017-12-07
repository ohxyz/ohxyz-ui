import TextBoxBasic from './textboxbasic.jsx';
import TextBoxNumber from './textboxnumber.jsx';
import TextBoxArea from './textboxarea.jsx';
import utils from './utils.js';

function TextBox( props ) {

    let type = utils.setDefault( props.type, 'text' );

    if ( type === 'text' ) {

        return new TextBoxBasic( props );
    }
    else if ( type === 'textarea' ) {

        return new TextBoxArea( props );
    }
    else if ( type === 'number' ) {

        return new TextBoxNumber( props );
    }
    else {

        return null;
    }
    
}

export default TextBox;

