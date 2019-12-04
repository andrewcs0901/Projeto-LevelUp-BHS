import React, { Component } from 'react';
import Item from '../../components/item/Item';
import firebaseService from '../../services/FirebaseService';
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import Header from '../../components/header/Header';
import Seletor from '../../components/seletor/Seletor';
import FloatButtom from '../../components/floatbuttom/FloatButtom'

class Listagem extends Component {

    constructor(){
        super();
        this.state = {
            opcaoSelecionada: 0,
            listas:[]
        }
    }

    componentDidMount() {
        firebaseService.getDataList('produtos', (dataReceived) => this.setState({ data: dataReceived }))
    }

    onSelect(event){
        alert(event);
        this.setState({opcaoSelecionada: event})
    }

    willRender(items){
        console.log(items)
        if(this.state === 0){
            return this.renderItem(items);
        }
        return this.renderItem(items
                                .filter( 
                                (elemento) => elemento.valor === this.state.opcaoSelecionada))
    }

    renderItem(items){
        let array  = [];
        console.log(items)
        items.forEach(element => {
            array.append(
                <Item nomeItem={element.nome} 
                quantidade={element.quantidade} 
                prioridade={element.prioridade} comentario={element.prioridade}/>
            )
        });
        console.log(array)
        return array;
    }

    render() {

        const items = [
            {nome: "Batata", quantidade: "3", prioridade:3, comentario:"1234"},
            {nome: "Arroz", quantidade:"5", prioridade:1, comentario:""},
            {nome: "Cebola",quantidade: "2", prioridade:2}
        ]    

        return (<>
            <Header titulo="Minhas listas" align="center"/>
            <Seletor 
                label="Filtre por prioridade"
                opcao={[{nome: "Todas", valor:0},
                        {nome: "Alta prioridade", valor: 1}, 
                        {nome: "Média prioridade", valor: 2}, 
                        {nome: "Baixa prioridade", valor: 3}]}
                justify="center"
                onSelect={this.onSelect}/>
            <div className="mensagem-arrastar" style={{textAlign: "center", padding:"2%"}}>Arraste o item para deletar</div>
            {this.willRender(items)}
 
            <Link to="/adicionar-item"><FloatButtom /></Link>
        </>)
    }

}

export default Listagem;