import React, { Component } from 'react';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import './Login.css';
import cartIcon from '../../components/icons/cart-icon.svg';
import { Link } from 'react-router-dom';


class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {};
        this.submit = this.submit.bind(this)
    }

    onChange = (e) => {
        this.setState({ [e.tipo]: e.valor })
    }

    submit() {
        const { email } = this.state;
        const { password } = this.state
        if (email && password) {
            if (this.validarEmail(email) && password.length >= 8) {
                const db = JSON.parse(localStorage.getItem("Login"));
                if (db) {
                    if (db.filter((cadastro) => cadastro.email === email && cadastro.password === password).length) {
                        Storage.removeItem("Session");
                        localStorage.setItem("Session", JSON.stringify(this.state))
                        window.location.href = "/minhas-listas"
                    }
                    else alert("Erro: Email e/ou senhas não são compatíveis")
                }
                else {
                    alert("Você precisará cadastrar primeiramente")
                    window.location.href = "/cadastro"
                }
            }
        }
        else
            alert("Por favor preencher todos os campos")
    }

    validarEmail(email) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return (true)
        }
        alert("Você não inseriu um e-mail válido")
        return (false)
    }

    render() {

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
                <Link to="/">
                    <div className="logo">
                        <img src={cartIcon} alt="icone carrinho de compras + simbolo compartilhavel"></img>
                    </div>
                </Link>
                <div className="_Login">

                    <header>Bem-Vindo novamente ao CompartiList!</header>
                    <Input type="email" labelText="Email:" labelFor="email"
                        placeholder="exemplo@email.com" autocomplete="on"
                        onChange={this.onChange} />
                    <Input type="password" labelText="Senha: (minímo 8 caracteres)" labelFor="senha" placeholder="senha"
                        length="8"
                        onChange={this.onChange} />
                    <Button text="Login" style={style} submit={this.submit} />
                    <div>Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link></div>
                </div>
            </>
        )

    }

}

export default Login;