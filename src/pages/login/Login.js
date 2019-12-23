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
<<<<<<< HEAD
                        localStorage.removeItem("Session");
                        let aux = this.state;
                        aux.listas = [];
                        localStorage.setItem("Session", JSON.stringify(aux))
=======
                        Storage.removeItem("Session");
                        localStorage.setItem("Session", JSON.stringify(this.state))
>>>>>>> d6183d308e43c97b5fd9362d800326d2b5cec6ee
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
<<<<<<< HEAD
            backgroundColor: "rgb(29, 27, 78)",
=======
            backgroundColor: "rgba(11, 0, 255, 0.53)",
>>>>>>> d6183d308e43c97b5fd9362d800326d2b5cec6ee
            fontWeight: "bold",
            color: "white",
            border: "none",
            padding: "2%",
<<<<<<< HEAD
            fontSize: "1.3em",
=======
>>>>>>> d6183d308e43c97b5fd9362d800326d2b5cec6ee
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

<<<<<<< HEAD
                    <header style={{ height: "20%" }}>Bem-Vindo novamente ao CompartiList!</header>
=======
                    <header>Bem-Vindo novamente ao CompartiList!</header>
>>>>>>> d6183d308e43c97b5fd9362d800326d2b5cec6ee
                    <Input type="email" labelText="Email:" labelFor="email"
                        placeholder="exemplo@email.com" autocomplete="on"
                        onChange={this.onChange} />
                    <Input type="password" labelText="Senha: (minímo 8 caracteres)" labelFor="senha" placeholder="senha"
                        length="8"
                        onChange={this.onChange} />
                    <Button text="Login" style={style} submit={this.submit} />
<<<<<<< HEAD
                    <div style={{ wordSpacing: "0.17em", textAlign: "center", margin: "0 auto" }}>
                        Não tem uma conta? 
                        <br></br><Link to="/cadastro">Cadastre-se</Link>
                    </div>
=======
                    <div>Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link></div>
>>>>>>> d6183d308e43c97b5fd9362d800326d2b5cec6ee
                </div>
            </>
        )

    }

}

export default Login;