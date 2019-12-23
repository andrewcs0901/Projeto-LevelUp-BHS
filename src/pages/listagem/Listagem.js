import React, { Component } from 'react';
import Item from '../../components/item/Item';
import { Link } from 'react-router-dom'
import Seletor from '../../components/seletor/Seletor';
import FloatButtom from '../../components/floatbuttom/FloatButtom';
import listaVaziaIcon from '../../components/icons/lista-vazia.png';
import cartIcon from '../../components/icons/cart-icon.svg';
import './Listagem.css';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import back from '../../components/icons/back.png'
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

    onSelect = (event) => {
        this.setState({ opcaoSelecionada: event });
    }

    willRender(items) {
        if (this.state.opcaoSelecionada === 0) {
            return this.renderItem(items);
        }
        const array = items.filter(elemento => elemento.prioridade === this.state.opcaoSelecionada);
        console.log(array)
        return this.renderItem(array)
    }

    renderItem(items) {
        let array = [];
        if (items.length) {
            array.push(<div className="mensagem-arrastar" >
                Arraste o item para deletar</div>)
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
        return <div className="mensagem-arrastar" >
            Sem items</div>

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
            console.log(db.listas
                .map(lista => (lista.id !== this.state.id) ? lista :
                    {
                        id: this.state.id,
                        items: this.state.items,
                        nome: this.state.nome,
                        opcaoSelecionada: this.state.opcaoSelecionada
                    }
                ))
            db.listas = db.listas
                .map(lista => (lista.id !== this.state.id) ? lista : {
                    id: this.state.id,
                    items: this.state.items,
                    nome: this.state.nome,
                    opcaoSelecionada: this.state.opcaoSelecionada
                })
            console.log(db.listas)
        }
        console.log(db)
        alert("Alteração salva!")
        localStorage.setItem("Session", JSON.stringify(db))
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

    listarItems(items) {
        console.log(items)
        if (items && items.length) {
            return (<><Seletor
                label="Filtre por prioridade"
                opcao={[{ nome: "Todas", valor: 0 },
                { nome: "Alta prioridade", valor: 1 },
                { nome: "Média prioridade", valor: 2 },
                { nome: "Baixa prioridade", valor: 3 }]}
                justify="center"
                onSelect={this.onSelect}
                opcaoInicial={this.state.opcaoSelecionada} />
                {this.willRender(items)} </>)
        }
        return (
            <div className="sem-items">
                <img className="cart-img" src={listaVaziaIcon} alt="icone-carrinho-de-supermercado-triste"></img>
                <div className="lista-vazia-msg">
                    <div className="mensagem-lista-vazia">Lista vazia</div>
                    <Link to={{ pathname: "/adicionar-item", state: this.state.id }}>
                        <div className="adicionar-item">Que tal cadastrar um item agora?</div></Link>
                </div>
            </div>
        )
    }

    semItems() {
        return (
            <div className="sem-items">
                <img className="cart-img" src={listaVaziaIcon} alt="icone-carrinho-de-supermercado-triste"></img>
                <div className="lista-vazia-msg">
                    <div className="mensagem-lista-vazia">Lista vazia</div>
                    <Link to={{ pathname: "/adicionar-item", state: this.state.id }}>
                        <div className="adicionar-item">Que tal cadastrar um item agora?</div></Link>
                </div>
            </div>
        )
    }

    render() {
        const { items } = this.state;
        return (<div className="visualizar-lista">
            <div>
                <Link to={{ pathname: "/minhas-listas", state: this.state }}>
                    <Button
                        text={"Voltar"}
                        icon={back}
                        style={{
                            float: "left",
                            backgroundColor: "rgb(255, 54, 54)",
                            border: "none",
                            padding: "2%",
                            fontSize: "1.1em"
                        }} />
                </Link>
                <Link to={{ pathname: "/compra", state: items}}>
                    <Button
                        text={"Iniciar compra"}
                        icon={cartIcon}
                        />
                </Link>
            </div>

            <Input
                placeholder={this.state.nome ? this.state.nome : "Nome da nova lista"}
                onChange={this.onChange}
                type="text"
                name={"NomeLista"}
                labelText="Nome da lista:"
                labelFor={"nome_lista"} />

            {this.listarItems(items)}
            <Link to={{ pathname: "/adicionar-item", state: this.state.id }}><FloatButtom /></Link>
            {(items && items.length) || (this.state.nome !== undefined) ?
                <div className="salvar">
                    <Button text="Salvar" submit={this.submit}
                        style={{
                            backgroundColor: "#136717",
                            border: "none",
                            padding: "4%",
                            fontSize: "1.2em",
                            margin: "0px auto",
                            fontWeight: "bolder",
                            color: "white",
                            letterSpacing: "2px"
                        }} />
                </div> : ""}
        </div>)
    }

}

export default Listagem;