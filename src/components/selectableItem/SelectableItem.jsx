import React, { Component } from 'react';
export default class SelectableItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selecionado: false
        }
        this.selected = this.selected.bind(this);
    }

    selected() {
        this.setState({selecionado: !this.state.selecionado});
        this.props.selected({select: !this.state.selecionado, id: this.props.id})
    }

    render() {
        const { name } = this.props;
        return (
            <div>
                <input type="checkbox" name="" id={name} checked={this.state.selecionado} onChange={this.selected} />
                {name}
            </div>
        )
    }
}