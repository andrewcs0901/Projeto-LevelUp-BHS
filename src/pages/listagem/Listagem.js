import React, { Component } from 'react';
import Item from '../../components/Item';
import firebaseService from '../../services/FirebaseService';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from '../../components/header/Header';
import Seletor from '../../components/seletor/Seletor';
import FloatButtom from '../../components/floatbuttom/FloatButtom'

class Listagem extends Component {

    state = {
        listas: []
    };

    componentDidMount() {
        firebaseService.getDataList('produtos', (dataReceived) => this.setState({ data: dataReceived }))
    }

    render() {

        return (<div>
            <Header />
{/*             <Seletor value={[
                {texto: "Alta prioridade",
                id: 1}, 
                {texto: "Média prioridade",
                id:2}, 
                {texto: "Baixa prioridade",
                id: 3}]} /> */}
            <span>Arraste o item para deletar</span>
            <Item nome={123} />
            <FloatButtom href="/minhas-listas"/>
        </div>)
    }

}

export default Listagem;