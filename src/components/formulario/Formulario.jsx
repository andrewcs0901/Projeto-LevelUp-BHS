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
        this.state = {
            dados: this.props
        }

        this.onClick = this.onClick.bind(this)
    }

    onClick(component) {
        const { tipo } = component;
        const { text } = component;
        if (tipo){
            this.setState({
                [component.tipo]: text
            })
        this.props.submit({ [component.tipo]: text })
        }
        else{
            this.props.submit({["comentario"]: text})
        }
    }

    render() {
        return (
            <div className="_Formulario">
                <Link to="/visualizar-lista">
                    <Navigation text="Voltar" icon={icon} style={
                        { justifyContent: "flex-end", flexDirection: "column" }} />
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
                <Contador onClick={this.onClick} />
                <TextArea
                    placeHolder={"Exemplo: Preferência por marca X"}
                    label={"(opcional) Adicione uma descrição:"}
                    onClick={this.onClick} />
            </div>



        )
    }

}