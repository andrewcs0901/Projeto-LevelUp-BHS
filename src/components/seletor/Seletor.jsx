import React, { Component } from 'react';

export default class Seletor extends Component {

    constructor(props) {
        super(props);
        this.updateState = this.updateState.bind(this);
    }

    renderList() {
        const { opcao } = this.props;
        if (opcao) {
            let array = [];
            opcao.forEach((element) => {
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
                <div style={{ display: "flex", justifyContent: this.props.justify, padding: "5%" }}>
                    <label htmlFor="texto">{this.props.label}</label>
                    <select onChange={this.updateState}>
                        {this.renderList()}
                    </select>
                </div>
            </div>
        )

    }


}