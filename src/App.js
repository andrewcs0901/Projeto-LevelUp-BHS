import React, { Component } from 'react';
import Content from './components/Content';
import firebaseService from './services/FirebaseService'
import { BrowserRouter, Route } from 'react-router-dom'
import NotFound404 from './pages/NotFound404';
import Listagem from './pages/listagem/Listagem';
import BoasVindas from './pages/boasvindas/BoasVindas'
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro'
import './index.css';
import AdicionarItem from './pages/adicionaritem/AdicionarItem';
import MinhasListas from './pages/minhaslistas/MinhasListas';


class App extends Component {

    constructor(props){
        super(props);
        let database = localStorage.getItem("usuario_logado")
        if(database){
            this.setState ={
                data: database
            }
        }
    }


    componentDidMount() {
        localStorage.setItem("CompartiList", "124")
        let data = localStorage.getItem("CompartList")
        //firebaseService.getDataList('produtos', (dataReceived) => this.setState({ data: dataReceived }))
    }

    render() {
        return (

            <div id="container">
                <BrowserRouter>
                    <Route exact path="/" component={BoasVindas} />
                    <Route exact path="/visualizar-lista" component={Listagem} />
                    <Route exact path="/minhas-listas" component={MinhasListas} />
                    <Route exact path="/nao-encontrado" component={NotFound404} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/cadastro" component={Cadastro} />
                    <Route exact path="/adicionar-item" render={(props) => <AdicionarItem url="minhas-listas" />} />
                </BrowserRouter>
                <Content />
            </div>

        );
    }
}

export default App;
