import React, { Component } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import firebaseService from './services/FirebaseService'
import LogIn from './pages/LogIn';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NotFound404 from './pages/NotFound404';
import Listagem from './pages/Listagem';

class App extends Component {

    state = {
        listas: []
    };

    componentDidMount() {
        firebaseService.getDataList('produtos', (dataReceived) => this.setState({ data: dataReceived }))
    }

    render() {
        const titulo = "Minhas listas";


        return (

            <div id="container">
                <Header titulo={titulo} />
                <BrowserRouter>
                    <Switch>
                        <Route path="/minha-conta" component={LogIn} />
                    </Switch>
                    <Switch>
                        <Route path="/minhas-listas" component={Listagem} />
                    </Switch>
                    <Switch>
                        <Route path="/nao-encontrado" component={NotFound404} />
                    </Switch>
                </BrowserRouter>
                <Content />
            </div>

        );
    }
}

export default App;
