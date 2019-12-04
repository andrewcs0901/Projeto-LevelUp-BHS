import React, { Component } from 'react';
import Item from '../../components/item/Item';
import firebaseService from '../../services/FirebaseService';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Header from '../../components/header/Header';
import Seletor from '../../components/seletor/Seletor';
import FloatButtom from '../../components/floatbuttom/FloatButtom'

class Listagem extends Component {

    constructor() {
        super();
        this.state = {
            opcaoSelecionada: 0,
        }
        this.onSelect = this.onSelect.bind(this);
        this.willRender = this.willRender.bind(this);
        this.renderItem = this.renderItem.bind(this)
    }

    componentDidMount() {
        firebaseService.getDataList('produtos', (dataReceived) => this.setState({ data: dataReceived }))
    }

    onSelect = (event) => {
        this.setState({ opcaoSelecionada: event });
        this.render();
    }

    willRender(items) {
        if (this.state.opcaoSelecionada === 0) {
            return this.renderItem(items);
        }
        const array = items.filter(elemento => elemento.prioridade === this.state.opcaoSelecionada);
        return this.renderItem(array)
    }

    renderItem(items) {
        let array = [];
        items.forEach(element => {
            array.push(
                <Item key={element.nome} nomeItem={element.nome}
                    quantidade={element.quantidade}
                    prioridade={element.prioridade} comentario={element.comentario} />
            )
        });
        console.log(array)
        return array;
    }

    render() {

        const items = [
            { nome: "Batata", quantidade: "3", prioridade: 3, comentario: "1234" },
            { nome: "Arroz", quantidade: "5", prioridade: 1, comentario: "" },
            { nome: "Cebola", quantidade: "2", prioridade: 2 }
        ]

        return (<>
            <Header titulo="Minhas listas" align="center" />
            <Seletor
                label="Filtre por prioridade"
                opcao={[{ nome: "Todas", valor: 0 },
                { nome: "Alta prioridade", valor: 1 },
                { nome: "Média prioridade", valor: 2 },
                { nome: "Baixa prioridade", valor: 3 }]}
                justify="center"
                onSelect={this.onSelect}
                opcaoInicial={this.state.opcaoSelecionada} />
            <div className="mensagem-arrastar" style={{ textAlign: "center", padding: "2%" }}>Arraste o item para deletar</div>
            {this.willRender(items)}

            <Link to="/adicionar-item"><FloatButtom /></Link>
        </>)
    }

}

export default Listagem;