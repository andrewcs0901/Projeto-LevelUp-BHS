import React, { Component } from 'react';
import Content from './components/Content';
import firebaseService from './services/FirebaseService'
import LogIn from './pages/LogIn';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NotFound404 from './pages/NotFound404';
import Listagem from './pages/listagem/Listagem';
import BoasVindas from './pages/boasvindas/BoasVindas'
import Login from './pages/login/Login';
import './index.css';


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
                        <Route path="/boas-vindas" component={BoasVindas} />
                    </Switch>
                    <Switch>
                        <Route path="/minha-conta" component={LogIn} />
                    </Switch>
                    <Switch>
                        <Route path="/minhas-listas" component={Listagem} />
                    </Switch>
                    <Switch>
                        <Route path="/nao-encontrado" component={NotFound404} />
                    </Switch>
                    <Switch>
                        <Route path="/login" component={Login} />
                    </Switch>
                </BrowserRouter>
                <Content />
            </div>

        );
    }
}

export default App;
