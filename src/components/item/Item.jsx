import React, { Component } from 'react';
import './item.css';
import Icon from '../../components/icons/commentary.png';

export default class Item extends Component {

    prioridade(){
        const {prioridade} = this.props;
        switch(prioridade){
            case 3:
                return "red";
            case 2:
                return "blue";
            case 1:
                return "green";
            default:
                return "gray"
        }
    }

    willRender(){
        return(this.props.comentario? <div className="comentario"><img src={Icon} alt=""/></div> : null)
    }

    render() {
        const cor = this.prioridade();
        return (
            <div className="_Item" style={{borderBottom: `4px solid ${cor}` }}>
                <div className="informacoes-item">
                    <span className="nome">Nome: {this.props.nomeItem}</span>
                    <span className="quantidade">Quantidade: {this.props.quantidade}</span>
                </div>
                {this.willRender()}
            </div>

        )
    }

}