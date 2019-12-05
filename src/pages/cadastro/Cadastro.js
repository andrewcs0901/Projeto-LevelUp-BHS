import React, { Component } from 'react';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import './Cadastro.css';
import cartIcon from '../../components/icons/cart-icon.svg'


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
                let db = JSON.parse(localStorage.getItem("Login"))
                if (db) {                    
                    if (db.filter((cadastro) => cadastro.email === email && cadastro.password === password))
                        db.push(this.state)
                    else
                        alert("Email já cadastrado no sistema")
                }
                else {
                    db = []
                    db.push(this.state);
                }
                localStorage.setItem("Login", JSON.stringify(db))
                window.location.href = "/minhas-listas"
            }

        }
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
                <div className="logo"><img src={cartIcon} alt="icone carrinho de compras + simbolo compartilhavel"></img></div>
                <div className="_Login">

                    <header>Esqueceu um item de compra? Não tem problema cadastre-se agora!</header>
                    <Input type="email" labelText="Email:" labelFor="email"
                        placeholder="exemplo@email.com" autocomplete="on"
                        onChange={this.onChange} />
                    <Input type="password" labelText="Senha: (minímo 8 caracteres)" labelFor="senha" placeholder="senha"
                        length="8"
                        onChange={this.onChange} />
                    <Button text="Cadastrar" style={style} submit={this.submit} />
                </div>
            </>
        )

    }

}

export default Login;