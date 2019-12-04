import React, { Component } from 'react';


export default class Seletor extends Component {

    renderList() {
        const { opcao } = this.props;
        if (opcao) {
            let array = [];
            let i = 0;
            opcao.map((element) => {
                array.push(<option 
                            key={element.valor} 
                            value={element.valor} onClick={this.props.onSelect.bind(this, element.valor)}>
                                {element.nome}
                            </option>)
            });
            return array;
        }
    }

    render() {

        return (
            <div>
                    <div style={{display:"flex", justifyContent: this.props.justify}}> 
                    <label htmlFor="texto">{this.props.label}</label>
                        <select>
                            {this.renderList()}
                        </select>
                    </div>
            </div>
 

        )

    }


}