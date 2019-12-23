import React, { Component } from 'react';
import AutoComplete from '../autocomplete/AutoComplete';
import Contador from '../contador/Contador';
import TextArea from '../textarea/TextArea';
import './Formulario.css';
import { Link } from 'react-router-dom'
import Navigation from '../navigation/NavigationIcon';
import icon from '../icons/error.png'
import Button from '../button/Button';

export default class Formulario extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dados: this.props
        }

        this.onClick = this.onClick.bind(this)
    }

    onClick(component) {
        const { tipo } = component;
        const { text } = component;
        if (tipo) {
            this.setState({
                [component.tipo]: text
            })
            this.props.submit({ [component.tipo]: text })
        }
        else {
            this.props.submit({ "comentario": text })
        }
    }

    getListaAnterior() {
        let db = JSON.parse(localStorage.getItem("Session"));
        let lista = db.listas.filter((lista) => lista.id === this.state.dados.idLista);
        return lista[0];
    }

    render() {
        return (
            <div className="_Formulario">
                <Link to={{ pathname: `/visualizar-lista`, state: this.getListaAnterior() }}>
                    <Navigation text="Voltar" icon={icon} style={
                        { justifyContent: "flex-end", flexDirection: "column" }} />
                </Link>
                <div>
                    Prioridade:
                    <Button text="Alta" value={{ tipo: "prioridade", text: 1 }} submit={this.onClick} />
                    <Button text="Média" value={{ tipo: "prioridade", text: 2 }} submit={this.onClick} />
                    <Button text="Baixa" value={{ tipo: "prioridade", text: 3 }} submit={this.onClick} />
                </div>

                <AutoComplete
                    placeholder={"Nome do item"}
                    items={["arroz", "abacaxi", "abacate", "pernil", "uva", "achocolatado", "caqui", "limão"]}
                    name="nome"
                    onClick={this.onClick} />
                <AutoComplete
                    placeholder={"Categoria"}
                    items={["laticinios", "frutas", "grãos", "carnes"]}
                    name="categoria"
                    onClick={this.onClick} />
                <Contador onClick={this.onClick} />
                <TextArea
                    placeHolder={"Exemplo: Preferência por marca X"}
                    label={"(opcional) Adicione uma descrição:"}
                    onClick={this.onClick} />
            </div>
        )
    }

}