import React, {Component} from 'react';

export default class ListaItem extends React{


    willRender(items){
        if(this.state.opcaoSelecionada === 0){
            return this.renderItem(items);
        }
        items.forEach(element => console.log(element))
        const array = items.filter( elemento => elemento.prioridade === this.state.opcaoSelecionada);
        return this.renderItem(array)
    }

    render(){

        return(
            null
        )

    }

}