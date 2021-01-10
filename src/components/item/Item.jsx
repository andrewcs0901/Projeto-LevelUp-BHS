import React from 'react';
import './item.css';
import Icon from '../../components/icons/commentary.png';
import DB from '../../services/DB';

const Item = (props) => {

    const prioridade = () => {
        const { prioridade } = props;
        switch (prioridade) {
            case 1:
                return "red";
            case 2:
                return "blue";
            case 3:
                return "green";
            default:
                return "gray"
        }
    }

    const willRender = () => {
        const { comentario } = props
        return (comentario ? <div className="comentario" onClick={() => alert(comentario)}><img src={Icon} alt="" /></div> : null)
    }

    const cor = prioridade();

    return (
        <div className="_Item" style={{ borderBottom: `4px solid ${cor}` }}>
            <div className="informacoes-item">
                <span className="nome">Nome: {props.nomeItem}</span>
                <span className="quantidade">Quantidade: {props.quantidade}</span>
            </div>
            <span onClick={() => props.removeItem(props.id)}>(X)</span>
            {willRender()}
        </div>



    )
}

export default Item;