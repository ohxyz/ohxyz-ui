import React from 'react';

class Dummy extends React.Component {

    constructor( props ) {

        super( props );

        this.handleClick = this.handleClick.bind( this );

        this.value = this.props.value;

        this.s = { a: 0 };

        this.state = this.s;
    }

    handleClick() {

        this.value = Math.random();

        this.setState( this.s );
    }

    render() {

        return <div onClick={ this.handleClick } >{ this.value }</div>
    }
}

export default Dummy;