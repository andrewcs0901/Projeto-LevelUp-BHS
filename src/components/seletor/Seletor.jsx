import React, { Component } from 'react';
import { toIdentifier } from '@babel/types';


export default class Seletor extends Component {

    constructor(props){
        super(props);
        this.state = {
            opcao : this.props.opcaoInicial
        }
    }

    renderList() {
        const { opcao } = this.props;
        if (opcao) {
            let array = [];
            let i = 0;
            opcao.map((element) => {
                array.push(<option 
                            key={element.valor} 
                            value={element.valor} 
                            >
                            {element.nome}
                            </option>)
            });
            return array;
        }
    }

    //onClick={this.props.onSelect.bind(this, element.valor)}

    handleChange(e){
        this.setState({opcao: e.target.value})
        return this.state.opcao
    }

    render() {
        let {valorInicial} = this.props;
        return (
            <div>
                <div style={{display:"flex", justifyContent: this.props.justify}}> 
                    <label htmlFor="texto">{this.props.label}</label>
                        <select onChange={
                            this.props.onSelect.bind(this, this.handleChange)}>
                            {this.renderList()}
                        </select>
                </div>
            </div>
 

        )

    }


}