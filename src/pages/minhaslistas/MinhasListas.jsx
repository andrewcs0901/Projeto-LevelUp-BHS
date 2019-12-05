import React, { Component } from 'react';
import Header from '../../components/header/Header'
import Item from '../../components/item/Item';

export default class MinhasListas extends Component {

    constructor(props) {
        super(props);
        const listas = localStorage.getItem("Session") ? JSON.parse(localStorage.getItem("Session")) : []
        console.log(listas)
        if (listas) {
            this.setState = {
                db: listas
            }
        }

    }

    renderizarListas() {
        let array = [];
        const { db } = this.state;
        if (db) {
            db.forEach((lista) => {
                array.push(<Item nomeItem={lista.nome} />)
            });
            return array;
        }

    }

    render() {

        return (
            <>
                <Header titulo="Minhas Listas" />
                {this.renderizarListas()}
            </>
        )

    }


}