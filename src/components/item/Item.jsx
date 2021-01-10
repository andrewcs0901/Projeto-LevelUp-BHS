import React, { useState } from 'react';
import './item.css';
import Icon from '../../components/icons/commentary.png';

const Item = (props) => {

    const [timer, setTimer] = useState();

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


    const mouseDown = () => {
        setTimer(setTimeout(() => confirmDelete(), 3500));
    }

    const mouseUp = () => {
        clearTimeout(timer);
    }

    const confirmDelete = () => {
        const confirm = window.confirm("Deseja excluir o item?");
        if(confirm){
            props.removeItem(props.id)
        }
    }

    return (
        <div className="_Item" style={{ borderBottom: `4px solid ${cor}` }}
            onMouseDown={mouseDown} onTouchStart={mouseDown}
            onTouchEnd={mouseUp} onMouseUp={mouseUp}
            onContextMenu={(e) => e.preventDefault()}>
            <div className="informacoes-item">
                <span className="nome">Nome: {props.nomeItem}</span>
                <span className="quantidade">Quantidade: {props.quantidade}</span>
            </div>
            {willRender()}
        </div>



    )
}

export default Item;