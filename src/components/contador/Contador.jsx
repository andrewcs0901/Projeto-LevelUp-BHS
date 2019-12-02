import React, {Component} from 'react';
import './Contador.css'

export default class Contador extends Component{

    constructor(){
        super();
        this.state = {
            valor: 0
        }
    }

    incrementa(quantidade){
        const {valor} = this.state;
        this.setState({valor: valor+quantidade})
    }

    decrementa(quantidade){
        const {valor} = this.state;
            this.setState({ valor: valor-quantidade})
    }

    atualizaCampo(evento){
        const {value} = evento.target;
        const quantidade = parseInt(value);
        if(quantidade >= 0 && typeof quantidade == "number"){
            this.setState({ valor: quantidade})
        }
        else if(value.length === 0){
            this.setState({valor: 0})
        }
    }

    renderizavel(quantidade){
    const {valor} = this.state;
    if(valor - quantidade >= 0)
        return (<button onClick={() => this.decrementa(quantidade)}>-{quantidade}</button>)
    }

    render(){
        const {valor} = this.state;
        return(
            <div className="_Contador">
                <label htmlFor="quantidade" className="label">Quantidade de itens</label>
                <span className="painel">
                    <span className="botoes">
                        {this.renderizavel(5)}
                        {this.renderizavel(1)}
                    </span>
                    <input type="text" value={valor} onChange={this.atualizaCampo.bind(this)} className="campo"></input>
                    <span className="botoes">
                        <button onClick={() => this.incrementa(1)}>+1</button>
                        <button onClick={() => this.incrementa(5)}>+5</button>
                    </span>
                </span>
            </div>
        )

    }
}