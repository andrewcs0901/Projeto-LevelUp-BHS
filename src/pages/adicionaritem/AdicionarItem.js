import React, { Component } from 'react';
import Formulario from '../../components/formulario/Formulario';
import NavigationIcon from '../../components/navigation/NavigationIcon';
import BackIcon from '../../components/icons/check.png';
import { Redirect } from 'react-router-dom';
const uuidv4 = require('uuid/v4');
//import {Link} from 'react-router-dom';

export default class AdicionarItem extends Component {

    constructor(props) {
        super(props);
        if (this.props.location.state && this.props.location.state[1]) {
            this.state = {
                dadosAnteriores: this.props.location.state.item ? this.props.location.state[0] : [],
                idLista: this.props.location.state,
            }
            this.submit = this.submit.bind(this);
            this.update = this.update.bind(this);
        }
        else {
            alert("Você não adicionou um lista ainda, voltando para o menu inicial")
            window.location.href = "/minhas-listas"
        }

    }

    submit(e) {
        this.setState({ [Object.keys(e)[0]]: e[Object.keys(e)[0]] })
    }

    update() {
        const { dadosAnteriores } = this.state;
        if (dadosAnteriores) {
            let aux = this.state;
            aux.id = uuidv4();
            this.setState({ id: aux.id });
            let db = JSON.parse(localStorage.getItem("Session"));
            db.listas.forEach((lista) => {
                if (lista.id === this.state.idLista) {
                    lista.items.push(aux);
                }
            })
            localStorage.setItem("Session", JSON.stringify(db))
            this.setState({ redirect: true })
            alert("Adicionado com sucesso!");

        } else {
            let aux = {
                nome: this.state.nome,
                id: this.state.dadosAnteriores.id,
                categoria: this.state.categoria,
                comentario: this.state.comentario
            }
            this.props.update(aux);
        }

    }


    render() {
        if (this.state.redirect) {
            let db = JSON.parse(localStorage.getItem("Session"));
            let lista = db.listas.filter((lista) => lista.id === this.state.idLista)
            console.log(lista)
            return <Redirect to={{ pathname: `/visualizar-lista`, state: lista[0] }} />
        }
        return (

            <React.Fragment>
                <NavigationIcon text={"Adicionar um novo item"} icon={BackIcon}
                    style={{
                        backgroundColor: "#ff5959", color: "black",
                        fontSize: "1.3em", flexDirection: "row", justifyContent: "space-evenly"
                    }}
                    update={this.update} />

                <Formulario
                    dadosAnteriores={this.state.dadosAnteriores}
                    url={this.props.url} submit={this.submit}
                    idLista={this.state.idLista} />
            </React.Fragment>

        )
    }

}