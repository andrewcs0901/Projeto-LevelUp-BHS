import React, { Component } from 'react';
import Content from './components/Content';
import firebaseService from './services/FirebaseService'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NotFound404 from './pages/NotFound404';
import Listagem from './pages/listagem/Listagem';
import BoasVindas from './pages/boasvindas/BoasVindas'
import Login from './pages/login/Login';
import './index.css';
import AdicionarItem from './pages/adicionaritem/AdicionarItem';


class App extends Component {

    state = {
        listas: []
    };

    componentDidMount() {
        firebaseService.getDataList('produtos', (dataReceived) => this.setState({ data: dataReceived }))
    }

    render() {
        return (

            <div id="container">
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/boas-vindas" component={BoasVindas} />
                    </Switch>
                    <Switch>
                        <Route exact path="/minhas-listas" component={Listagem} />
                    </Switch>
                    <Switch>
                        <Route exact  path="/nao-encontrado" component={NotFound404} />
                    </Switch>
                    <Switch>
                        <Route exact path="/login" component={Login} />
                    </Switch>
                    <Switch>

                        <Route  exact path="/adicionar-item" render={(props) => <AdicionarItem url="minhas-listas"/>} />
                    </Switch>
                </BrowserRouter>
                <Content />
            </div>

        );
    }
}

export default App;
