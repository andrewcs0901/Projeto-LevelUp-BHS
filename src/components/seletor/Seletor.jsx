import React, { Component } from 'react';

export default class Seletor extends Component {

    renderList() {
        const { value } = this.props;
        if (value) {
            let array = [];
            let i = 0;
            value.map((element) => {
                array.push(<option key={element.id} value={element.nome}>{element.nome}</option>)
            });
            return array;
        }

    }

    render() {

        return (

            <div>
                <select>
                    {this.renderList()}
                </select>
            </div>

        )

    }


}