import React, {Component} from 'react';
import AutoComplete from '../autocomplete/AutoComplete';
import Contador from '../contador/Contador';
import TextArea from '../textarea/TextArea'; 
import  './Formulario.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navigation from '../navigation/NavigationIcon';
import icon from '../icons/error.png'
import Seletor from '../seletor/Seletor';

export default class Formulario extends Component{

    constructor(props) {
        super();
        this.state = {
            data: [props]
        }
    }

    render(){
        return (
            <div className="_Formulario">
                <Navigation url={"/"} text="Voltar" icon={icon} style={ 
                    {justifyContent: "flex-end", flexDirection: "column"}}/>
                <Seletor value={["Alta prioridade", "Média prioridade", "Baixa prioridade"]}/>
                <AutoComplete placeholder={"Nome do item"} items={["arroz", "abacaxi", "abacate", "pernil", "uva", "achocolatado"]}/>
                <AutoComplete placeholder={"Categoria"}items={["laticinios", "frutas", "grãos","carnes"]}/>
                <Contador />
                <TextArea 
                    placeHolder={"Exemplo: Preferência por marca X"}
                    label={"(opcional) Adicione uma descrição:"}/>
            </div>


        
        )
    }
        
}