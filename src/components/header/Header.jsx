import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

    render() {
        const {titulo}  = this.props;
        const {align} = this.props? this.props : ""
        return (
            <div>
            <header className="_Header" style={{textAlign: align}}>
                <h1>
                    {titulo}
                </h1>
            </header>
            </div>

        )
    }

}

export default Header;