import React from 'react';

class Dummy extends React.Component {

    constructor( props ) {

        super( props );

        this.handleClick = this.handleClick.bind( this );

        this.name = this.props.name;

        this.state = {

            content: 'xyz'
        };
    }

    handleClick() {

        // this.name = Math.random();

        this.setState( { 

            content: 'xyz'

        } );
    }


    render() {

        return <div onClick={ this.handleClick } >{ this.state.content }</div>
    }
}

export default Dummy;