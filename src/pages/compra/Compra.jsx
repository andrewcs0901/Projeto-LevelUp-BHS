import React, { Component } from 'react';
import SelectableItem from '../../components/selectableItem/SelectableItem';
import ProgressBar from '../../components/progressBar/ProgressBar';

export default class Compra extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: props.location.state,
            progress: 0,
            completed: 0
        }
        this.percentual = this.percentual.bind(this);
        this.selected = this.selected.bind(this);
    }

    renderItems() {
        let array = [];
        this.state.items.forEach(item => {
            array.push(<SelectableItem name={item.nome} key={item.id} selected={this.selected} />)
        });
        return array;
    }

    renderProgressBar() {
        return <ProgressBar backgroundColor="green" progress={this.state.progress} />;
    }

    selected(select) {
        if (select){
            this.setState({ progress: this.percentual(this.state.completed+1)});
            this.setState({completed : this.state.completed+1} );
        }
            
        else
            if (this.state.completed !== 0){
                this.setState({ progress: this.percentual(this.state.completed-1) })
                this.setState({completed : this.state.completed-1} );
            }
                
    }

    percentual(completed){
        console.log(completed)
        return ((completed)/this.state.items.length)*100;
    }

    render() {

        return (<div className="_Compra">
            {this.renderProgressBar()}
            {this.renderItems()}
        </div>);
    }
}