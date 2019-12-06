import React, { Component } from 'react';
import Item from '../../components/item/Item';
import firebaseService from '../../services/FirebaseService';
import { Link } from 'react-router-dom'
import Seletor from '../../components/seletor/Seletor';
import FloatButtom from '../../components/floatbuttom/FloatButtom';
import icon from '../../components/icons/lista-vazia.png';
import './Listagem.css';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
const uuidv4 = require('uuid/v4');

class Listagem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            opcaoSelecionada: 0,
            items: this.props.location.state ? this.props.location.state.items : [],
            id: this.props.location.state ? this.props.location.state.id : [],
            nome: this.props.location.state ? this.props.location.state.nome : ""
        }
        this.onSelect = this.onSelect.bind(this);
        this.willRender = this.willRender.bind(this);
        this.renderItem = this.renderItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.onChange = this.onChange.bind(this);
        this.submit = this.submit.bind(this)
    }

    componentDidMount() {
        //firebaseService.getDataList('produtos', (dataReceived) => this.setState({ data: dataReceived }))
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
        if (items.length) {
            items.forEach(item => {
                array.push(

                    <Item key={item.nome} nomeItem={
                        <Link to={{ pathname: "/adicionar-item", state: [item, this.state.id] }}>
                            {item.nome}</Link>}
                        quantidade={item.quantidade}
                        prioridade={item.prioridade}
                        comentario={item.comentario}
                        id={item.id}
                        removeItem={this.removeItem}
                    />

                )
            });
            return array;
        }

    }

    onChange(e) {
        this.setState({ nome: e.valor })
    }

    submit() {
        const db = JSON.parse(localStorage.getItem("Session"));
        if (!this.state.id) {
            let aux = this.state;
            aux.id = uuidv4();
            aux.items = []
            this.setState({ id: uuidv4() })
            db.listas.push(aux);
        }
        else {
            db.listas = db.listas
                .map(lista => (lista.id !== this.state.id) ? { lista } : {
                    ...lista,
                    nome: this.state.nome.length ? this.state.nome : lista.nome,
                    items: this.state.items
                })
        }
        alert("Alteração salva!")
        localStorage.setItem("Session", JSON.stringify(db))
        window.location.href = "/minhas-listas"
    }

    removeItem(id) {
        this.setState(
            { items: [...this.state.items.filter((item) => item.id !== id)] }
        )

        let db = JSON.parse(localStorage.getItem("Session"));
        db.listas = db.listas.map((lista) => lista.id !== this.state.id ? lista :
            { ...lista, items: this.state.items });
        localStorage.setItem("Session", JSON.stringify(db))
    }

    listarItems(items, mensagem) {
        if (items) {
            return (<><Seletor
                label="Filtre por prioridade"
                opcao={[{ nome: "Todas", valor: 0 },
                { nome: "Alta prioridade", valor: 1 },
                { nome: "Média prioridade", valor: 2 },
                { nome: "Baixa prioridade", valor: 3 }]}
                justify="center"
                onSelect={this.onSelect}
                opcaoInicial={this.state.opcaoSelecionada} />

                <div className="mensagem-arrastar" style={{ textAlign: "center", padding: "2%" }}>
                    Arraste o item para deletar</div>
                {this.willRender(items)} </>)
        }
        return (
            <div className="sem-items">
                <img className="cart-img" src={icon} alt="icone-carrinho-de-supermercado-triste"></img>
                <div className="lista-vazia-msg">
                    <span className="mensagem-lista-vazia">Lista vazia</span>
                    <Link to={{ pathname: "/adicionar-item", state: [] }}>
                        <span className="adicionar-item">Que tal cadastrar uma lista agora?</span></Link>
                </div>
            </div>
        )
    }
    render() {
        const { items } = this.state;
        return (<>
            <Input
                placeholder={this.state.nome ? this.state.nome : "Nome da nova lista"}
                onChange={this.onChange}
                type="text"
                name={"NomeLista"}
                labelText="Nome da lista:"
                labelFor={"nome_lista"} />
            <Link to={{ pathname: "/minhas-listas", state: this.state }}>
                <Button
                    text={"Voltar"}
                    style={{
                        float: "left",
                        backgroundColor: "rgb(255, 54, 54)",
                        border: "none",
                        padding: "2%",
                        fontSize: "1.1em",
                        margin: "5%"
                    }} />
            </Link>
            {this.listarItems(items)}
            <Link to={{ pathname: "/adicionar-item", state: this.state.id }}><FloatButtom /></Link>
            <div className="salvar">
                <Button text="Salvar" submit={this.submit}
                    style={{
                        backgroundColor: "rgb(37, 215, 255)",
                        border: "none",
                        padding: "2%",
                        fontSize: "1.2em",
                        margin: "0 auto"
                    }} />
            </div>

        </>)
    }

}

export default Listagem;