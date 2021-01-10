import React, { useState } from 'react';
import './Header.css';
import DB from '../../services/DB'
import {loginURL} from '../../App';
import { Redirect } from 'react-router-dom';

const Header = (props) => {

        const {titulo}  = props;
        const {align} = props || "center"
        const [redirect, setRedirect] = useState(false)

        const logOff = () => {
            DB.saveSession();
            setRedirect((current) => !current)
        }

        return (
            <div>
            <header className="_Header" style={{textAlign: align}}>
                <h1>
                    {titulo}
                </h1>
                <button onClick={logOff}>Sair</button>
                {redirect && <Redirect to={loginURL}/>}
            </header>
            </div>

        )
}

export default Header;