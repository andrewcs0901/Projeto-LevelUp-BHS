import React, { Component } from 'react';
import Header from '../../components/header/Header'
import Item from '../../components/item/Item';
import FloatButtom from '../../components/floatbuttom/FloatButtom';
import { Link } from 'react-router-dom'
import Button from '../../components/button/Button';
import icon from '../../components/icons/lista-vazia.png';
import './MinhasListas.css'

export default class MinhasListas extends Component {

    constructor() {
        super();
        if (localStorage.getItem("Session")) {
            const db = JSON.parse(localStorage.getItem("Session"));
            this.state = {
                db
            }
            this.renderizarListas = this.renderizarListas.bind(this);
            this.removeItem = this.removeItem.bind(this);
        } else {
            alert("Você precisa fazer login para continuar");
            window.location.href = "/login"
        }

    }

    removeItem(id) {
        this.setState({})
        let localStor = JSON.parse(localStorage.getItem("Session"));
        localStor.listas = localStor.listas.filter((lista) => lista.id !== id);
        localStorage.setItem("Session", JSON.stringify(localStor))

    }

    renderizarListas() {
        let array = [];
        const { db } = this.state;
        console.log(db)
        if (db.listas.length) {
            db.listas.forEach((lista) => {
                console.log(lista.lista)
                array.push(<Item key={lista.id} nomeItem={
                    <Link key={lista.id} to={{ pathname: `/visualizar-lista`, state: lista }}>
                        {lista.nome}
                    </Link>}
                    id={lista.id}
                    removeItem={this.removeItem}
                    quantidade={lista.items? lista.items.length : 0} />
                )
            });
            return array;
        }
        else
            return (<div className="mensagem-sem-listas"><Link to={{ pathname: "/visualizar-lista", state: [] }}>
                    <img src={icon} alt="carrinho-de-compras-triste" />
                    <div className="descricao">
                        Você não possui nenhuma lista cadastrada
                    </div>
                    <Button text={"Adicicionar nova lista"}
                    /></Link></div>)

    }

    render() {

        return (
            <div className="_MinhasListas">
                <Header titulo="Minhas Listas" />
                {this.renderizarListas()}

                <Link to={{ pathname: "/visualizar-lista", state: [] }}><FloatButtom /></Link>
            </div>
        )

    }


}