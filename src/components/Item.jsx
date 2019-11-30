import React, {Component} from 'react';

class Item extends Component{

    render(){

        const nome = this.props

        return(
            <span id={nome}></span>
        )
    }

}

export default Item;