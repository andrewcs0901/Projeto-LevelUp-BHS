import React, { Component } from 'react';
import SelectableItem from '../../components/selectableItem/SelectableItem';
import ProgressBar from '../../components/progressBar/ProgressBar';

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
        let array = [];
        this.state.items.forEach(item => {
            array.push(<SelectableItem name={item.nome} key={item.id} selected={this.selected} id={item.id} />)
        });
        return array;
    }

    renderProgressBar() {
        return <ProgressBar backgroundColor="#0dff0d" progress={this.state.progress} />;
    }

    selected(item) {
        const {select} =  item;
        const {id}     = item;
        if (select){
            this.setState({completed : [...this.state.completed, id]} );
            this.setState({progress: this.percentual(this.state.completed.length+1)});
        }
            
        else
            if (this.state.completed.length){
                this.setState({completed : this.state.completed.filter( item => item != id)} );
                this.setState({progress: this.percentual(this.state.completed.length-1) })
            }      
    }

    percentual(completed){
        return ((completed)/this.state.items.length)*100;
    }

    render() {

        return (<div className="_Compra">
            {this.renderProgressBar()}
            {this.renderItems()}
        </div>);
    }
}