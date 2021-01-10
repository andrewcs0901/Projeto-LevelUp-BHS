import React, { Component } from 'react';
import Content from './components/Content';
import { BrowserRouter, Route } from 'react-router-dom'
import NotFound404 from './pages/NotFound404';
import Listagem from './pages/listagem/Listagem';
import BoasVindas from './pages/boasvindas/BoasVindas'
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro'
import './index.css';
import AdicionarItem from './pages/adicionaritem/AdicionarItem';
import MinhasListas from './pages/minhaslistas/MinhasListas';
import Compra from './pages/compra/Compra';

export const [rootURL, listsURL, loginURL, signInURL, addItemURL, viewListURL, buyListURL, notFoundURL] = ["/", "/minhas-listas", "/login", "/cadastro", "/adicionar-item", "/visualizar-lista", "/compra", "/nao-encontrado"]

const pages = [
    {
        path: rootURL,
        component: BoasVindas
    },
    {
        path: listsURL,
        component: MinhasListas
    },
    {
        path: loginURL,
        component: Login
    },
    {
        path: signInURL,
        component: Cadastro
    },
    {
        path: addItemURL,
        component: AdicionarItem
    },
    {
        path: viewListURL,
        component: Listagem
    },
    {
        path: buyListURL,
        component: Compra
    },
    {
        path: notFoundURL,
        component: NotFound404
    },
]

class App extends Component {

    constructor(props) {
        super(props);
        let database = localStorage.getItem("usuario_logado")
        if (database) {
            this.setState = {
                data: database
            }
        }
    }

    render() {
        return (

            <div id="container">
                <BrowserRouter>
                    {pages.map( page => <Route exact path={page.path} component={page.component} key={page.path}/>)}
                </BrowserRouter>
                <Content />
            </div>

        );
    }
}

export default App;
