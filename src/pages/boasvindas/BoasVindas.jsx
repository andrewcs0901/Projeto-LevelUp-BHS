import React, {Component} from 'react';
import logo from '../../components/icons/cart-icon.svg'
import {Link} from 'react-router-dom'
import Button from '../../components/button/Button';
import './BoasVindas.css'

export default class BoasVindas extends Component{

    render(){

        return(

            <div className="_BoasVindas">
                <div className="mensagem-logo">
                    <h3>Seja bem vindo ao CompartList!</h3>
                    <img src={logo} alt="Compartilist logo"/>
                </div>
                <div className="opcao">
                    <div className="login">
                        <Link to="/login">
                            <Button text="Login"/>
                        </Link>
                    </div>
                    <div className="cadastro">
                        <Link to="/cadastro">
                            <Button text="Cadastro"/>
                        </Link>
                    </div>
                </div>
            </div>
        )

    }

}