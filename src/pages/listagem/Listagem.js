import React, { Component } from 'react';
import Item from '../../components/item/Item';
import firebaseService from '../../services/FirebaseService';
import { Link } from 'react-router-dom'
import Header from '../../components/header/Header';
import Seletor from '../../components/seletor/Seletor';
import FloatButtom from '../../components/floatbuttom/FloatButtom';
import icon from '../../components/icons/lista-vazia.png';
import './Listagem.css';

class Listagem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            opcaoSelecionada: 0,
            items: [
                { nome: "Batata", quantidade: "3", prioridade: 3, comentario: "1234", id: 1 },
                { nome: "Arroz", quantidade: "5", prioridade: 1, comentario: "", id: 2 },
                { nome: "Cebola", quantidade: "2", prioridade: 2, id: 3 }
            ]
        }
        this.onSelect = this.onSelect.bind(this);
        this.willRender = this.willRender.bind(this);
        this.renderItem = this.renderItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    componentDidMount() {
        firebaseService.getDataList('produtos', (dataReceived) => this.setState({ data: dataReceived }))
    }

    onSelect = (event) => {
        this.setState({ opcaoSelecionada: event });
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
                    prioridade={element.prioridade}
                    comentario={element.comentario}
                    id={element.id}
                    removeItem={this.removeItem} />
            )
        });
        return array;
    }

    removeItem(id) {
        const numId = parseInt(id)
        this.setState(
            { items: [...this.state.items.filter((item) => item.id !== numId)] }
        )
    }

    listarItems(items) {
        return items.length ? (<><Seletor
            label="Filtre por prioridade"
            opcao={[{ nome: "Todas", valor: 0 },
            { nome: "Alta prioridade", valor: 1 },
            { nome: "Média prioridade", valor: 2 },
            { nome: "Baixa prioridade", valor: 3 }]}
            justify="center"
            onSelect={this.onSelect}
            opcaoInicial={this.state.opcaoSelecionada} />

            <div className="mensagem-arrastar" style={{ textAlign: "center", padding: "2%" }}>Arraste o item para deletar</div>
            {this.willRender(this.state.items)} </>) :
            <div className="sem-items">
                <img className="cart-img" src={icon} alt="icone-carrinho-de-supermercado-triste"></img>
                <div className="lista-vazia-msg">
                    <span className="mensagem-lista-vazia">Ops! Sua lista está vazia, que tal</span>
                    <Link to="/adicionar-item"><span className="adicionar-item"> Adicionar um item agora?</span></Link>
                </div>
            </div>
    }

    render() {
        const { items } = this.state;
        return (<>
            <Header titulo="Minhas listas" align="center" />
            <div>
                <button className="salvar">Salvar</button>
            </div>
            {this.listarItems(items)}
            <Link to="/adicionar-item"><FloatButtom /></Link>
        </>)
    }

}

export default Listagem;