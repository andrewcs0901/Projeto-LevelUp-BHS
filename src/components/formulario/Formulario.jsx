import React, { Component } from 'react';
import AutoComplete from '../autocomplete/AutoComplete';
import Contador from '../contador/Contador';
import TextArea from '../textarea/TextArea';
import './Formulario.css';
import { Link } from 'react-router-dom'
import Navigation from '../navigation/NavigationIcon';
import icon from '../icons/error.png'

export default class Formulario extends Component {

    constructor(props) {
        super(props);
        this.state={
            
        }

        this.onClick =this.onClick.bind(this)
    }

    onClick(component) {
        const { tipo } = component;
        const { text } = component;
        console.log(component)
        console.log(tipo)
        if (tipo)
            this.setState({
                [component.tipo]: text
            })
    }

    render() {
        console.log(this.state)
        return (
            <div className="_Formulario">
                <Link to={this.props.url}>
                    <Navigation text="Voltar" icon={icon} style={
                        { justifyContent: "flex-end", flexDirection: "column"}} />
                </Link>
                <AutoComplete
                    placeholder={"Nome do item"}
                    items={["arroz", "abacaxi", "abacate", "pernil", "uva", "achocolatado"]}
                    name="nome"
                    onClick={this.onClick} />
                <AutoComplete
                    placeholder={"Categoria"}
                    items={["laticinios", "frutas", "grãos", "carnes"]}
                    name="categoria"
                    onClick={this.onClick} />
                <Contador onClick={this.onClick}/>
                <TextArea
                    placeHolder={"Exemplo: Preferência por marca X"}
                    label={"(opcional) Adicione uma descrição:"}
                    onClick={this.onClick} />
            </div>



        )
    }

}