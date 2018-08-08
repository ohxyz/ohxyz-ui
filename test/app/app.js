import React from 'react';
import ReactDOM from 'react-dom';
import {

    InsertBase,
    InputText,
    InputNumber

} from '../../src/main.js';

import Dummy from './dummy.js';

require( '../../less/main.less');

class App extends React.Component {

    constructor( props ) {

        super( props );

        this.options = [

            { label: 'Mr', value: 'mr' },
            { label: 'Ms', value: 'ms' },
            { label: 'God', value: 'god' },
            { label: 'Goddess', value: 'goddess' },
            { label: 'abc', value: '1234' },
            { label: 'abd', value: '1234' },
            { label: 'abe', value: '1234' },
            { label: 'bcd', value: '1234' },
            { label: 'bcf', value: '1234' }
        ];
    }

    render() {

        let info1 = "The ACCC is Australia’s peak consumer protection and competition agency. The ACCC is an independent statutory government authority serving the public interest. Most of the ACCC’s enforcement work is conducted under the provisions of the Competition and Consumer Act 2010 (the Act).";

        let info2 = "Victoria’s Emergency Services have warned of an increased risk of avalanches in back country alpine areas due to the forecast heavy snowfalls and strong winds.";

        let info3 = "From 1 July 2017, complaints about the conduct or capacity of Victorian judicial officers or the Victorian Civil and Administrative Tribunal (VCAT) members may be made to the Judicial Commission of Victoria. The Commission is an independent organisation established under the Judicial Commission of Victoria Act 2016 to investigate complaints about judicial officers and VCAT members. The Commission provides an accessible and transparent complaint process, which aims to ensure public confidence in Victorian courts and the VCAT is maintained.";

        let options = [
 
            { label: 'option1', value: 'option1' },
            { label: 'select-me', value: 'selectMe', selected: true  },
            { label: '123', value: 123, selected: true }
        ];

        let questions = [

            'What ',
            'Which ',
            'When',
        ];

        let shorts = [

            '&*(&*(',
            'ueiwoq',
            ',.vz,c',
        ];

        let longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent facilisis odio ac ipsum posuere dapibus. In vulputate et lectus sit amet aliquam. Fusce et sagittis lacus, sit amet gravida orci. Integer ac lacinia dolor, vel aliquet quam.';

        return (

            <form>
                <InputText />
                <InputNumber value="2" />
            </form>
        )
    }
}

ReactDOM.render(

    <App />,
    document.getElementById( 'root' )
);