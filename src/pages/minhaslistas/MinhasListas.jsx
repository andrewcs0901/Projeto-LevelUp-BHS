import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header'
import Item from '../../components/item/Item';
import FloatButtom from '../../components/floatbuttom/FloatButtom';
import { Link } from 'react-router-dom'
import Button from '../../components/button/Button';
import icon from '../../components/icons/lista-vazia.png';
import './MinhasListas.css';
import DB from '../../services/DB';

const MinhasListas = () => {

    const [db, setDataBase] = useState({listas:[]});

    useEffect(
        () => {
            const containsSession = DB.getSession;
            if (containsSession)
                setDataBase(DB.getSession)
            else {
                alert("Você precisa fazer login para continuar");
                window.location.href = "/login"
            }
        }, [db]
    )

    const removeItem = async (id) => setDataBase(await DB.removeList(id));

    const renderizarListas = () => db.listas.map((lista) =>
    (
        <Item key={lista.id} nomeItem={
            <Link key={lista.id} to={{ pathname: `/visualizar-lista`, state: lista }}>{lista.nome}</Link>
        }
            id={lista.id}
            removeItem={removeItem}
            quantidade={lista.items.length || 0} />
    )
    )
    const semItens = () => (
        <div className="mensagem-sem-listas"><Link to={{ pathname: "/visualizar-lista", state: [] }}>
            <img src={icon} alt="carrinho-de-compras-triste" />
            <div className="descricao">
                Você não possui nenhuma lista cadastrada
                    </div>
            <Button text={"Adicicionar nova lista"}
            /></Link></div>
    )

    console.log(db);

    return (
        <div className="_MinhasListas">
            <Header titulo="Minhas Listas" />
            {db?.listas?.length !== undefined ? renderizarListas() : semItens()}
            <Link to={{ pathname: "/visualizar-lista", state: [] }}><FloatButtom /></Link>
        </div>
    )

}

export default MinhasListas;