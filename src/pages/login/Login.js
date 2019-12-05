import React, { Component } from 'react';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import './Login.css';
import cartIcon from '../../components/icons/cart-icon.svg'

class Login extends Component{

    render(){

        const style = {
            backgroundColor: "rgba(11, 0, 255, 0.53)",
            fontWeight: "bold",
            color: "white",
            border: "none",
            padding: "2%",
            margin: "10% auto"
        }

        return (
            <>
            <div className="logo"><img src={cartIcon} alt="icone carrinho de compras + simbolo compartilhavel"></img></div>
            <div className="_Login">
                
                <header>Bem-Vindo novamente ao CompartiList!</header>
                <Input type="email" labelText="Email:" labelFor="email" 
                placeholder="exemplo@email.com" autocomplete="on"/>
                <Input type="password" labelText="Senha:" labelFor="senha" placeholder="senha"/>
                <Button text="Login" style={style} />
            </div>
            </>
        )

    }

}

export default Login;