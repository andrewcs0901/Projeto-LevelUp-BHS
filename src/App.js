import React, { Component } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import firebaseService from './services/FirebaseService'
import LogIn from './pages/LogIn';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NotFound404 from './pages/NotFound404';
import Listagem from './pages/Listagem';
import BoasVindas from './pages/boasvindas/BoasVindas'


class App extends Component {

    state = {
        listas: []
    };

    componentDidMount() {
        firebaseService.getDataList('produtos', (dataReceived) => this.setState({ data: dataReceived }))
    }

    handleChange(event){
        console.log(event.target.value)
    }

    render() {
        const titulo = "Minhas listas";


        return (

            <div id="container">
                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={BoasVindas} />
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
                </BrowserRouter>
                <Content />
            </div>

        );
    }
}

export default App;
