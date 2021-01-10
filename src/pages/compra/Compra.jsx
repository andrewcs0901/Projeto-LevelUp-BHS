import React, { Component } from 'react';
import SelectableItem from '../../components/selectableItem/SelectableItem';
import ProgressBar from '../../components/progressBar/ProgressBar';
import Header from '../../components/header/Header';
import NavigationIcon from '../../components/navigation/NavigationIcon';
import back from '../../components/icons/back.png'
import { Link } from 'react-router-dom';

export default class Compra extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: props.location.state,
            progress: 0,
            completed: []
        }
        this.percentual = this.percentual.bind(this);
        this.selected = this.selected.bind(this);
    }

    renderItems() {
        return this.state.items.map(item =>
            <SelectableItem name={item.nome} key={item.id} selected={this.selected} id={item.id} />)

    }

    renderProgressBar() {
        return <ProgressBar backgroundColor="#0dff0d" progress={this.state.progress} />;
    }

    selected(item) {
        const { select } = item;
        const { id } = item;
        if (select) {
            this.setState({ completed: [...this.state.completed, id] });
            this.setState({ progress: this.percentual(this.state.completed.length + 1) });
        }

        else
            if (this.state.completed.length) {
                this.setState({ completed: this.state.completed.filter(item => item != id) });
                this.setState({ progress: this.percentual(this.state.completed.length - 1) })
            }
    }

    percentual(completed) {
        return ((completed) / this.state.items.length) * 100;
    }

    render() {

        return (<div className="_Compra">
            <Link to="/minhas-listas">
                <NavigationIcon icon={back}
                    style={{
                        float: "left",
                        backgroundColor: "rgb(255, 54, 54)",
                        border: "none",
                        padding: "2%",
                        fontSize: "1.1em"
                    }} />
            </Link>
            <Header titulo="Lista de Compras" />
            {
                this.state.items && (
                    <>
                        { this.renderProgressBar()}
                        { this.renderItems()}
                    </>
                )}
        </div >);
    }
}