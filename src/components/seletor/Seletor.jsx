import React, { Component } from 'react';
import { toIdentifier } from '@babel/types';


export default class Seletor extends Component {

    constructor(props) {
        super(props);
        this.updateState = this.updateState.bind(this);
    }

    renderList() {
        const { opcao } = this.props;
        if (opcao) {
            let array = [];
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

    updateState = (event) => {
        this.props.onSelect(parseInt(event.target.value))

    }

    render() {
        return (
            <div>
                <div style={{ display: "flex", justifyContent: this.props.justify }}>
                    <label htmlFor="texto">{this.props.label}</label>
                    <select onChange={this.updateState}>
                        {this.renderList()}
                    </select>
                </div>
            </div>


        )

    }


}