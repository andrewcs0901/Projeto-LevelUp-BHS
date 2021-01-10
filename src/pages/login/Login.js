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
                    if (db.email === email && db.password === password){
                        localStorage.removeItem("Session");
                        let aux = this.state;
                        aux.listas = [];
                        localStorage.setItem("Session", JSON.stringify(db))
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
        if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return (true)
        }
        alert("Você não inseriu um e-mail válido")
        return (false)
    }

    render() {

        const style = {
            backgroundColor: "rgb(29, 27, 78)",
            fontWeight: "bold",
            color: "white",
            border: "none",
            padding: "2%",
            fontSize: "1.3em",
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

                    <header style={{ height: "20%" }}>Bem-Vindo novamente ao CompartiList!</header>
                    <Input type="email" labelText="Email:" labelFor="email"
                        placeholder="exemplo@email.com" autocomplete="on"
                        onChange={this.onChange} />
                    <Input type="password" labelText="Senha: (minímo 8 caracteres)" labelFor="senha" placeholder="senha"
                        length="8"
                        onChange={this.onChange} />
                    <Button text="Login" style={style} submit={this.submit} />
                    <div style={{ wordSpacing: "0.17em", textAlign: "center", margin: "0 auto" }}>
                        Não tem uma conta? 
                        <br></br><Link to="/cadastro">Cadastre-se</Link>
                    </div>
                </div>
            </>
        )

    }

}

export default Login;