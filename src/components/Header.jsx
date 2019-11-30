import React, { Component } from 'react';

class Header extends Component {

    render() {
        const {titulo}  = this.props;
        return (

            <header>
                <h1>
                    {titulo}
                </h1>
            </header>
        )
    }

}

export default Header;