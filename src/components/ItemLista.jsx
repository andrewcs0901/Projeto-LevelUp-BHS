import React, {Component} from 'react';

class ItemLista extends Component{

    render() {

        const {id, nome, quantidade} = this.props;

        return (
            <div>
                <input type="checkbox" id={id}></input>
            </div>
        )
    }

}