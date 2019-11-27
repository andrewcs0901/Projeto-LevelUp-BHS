import React, { Component } from 'react';
import './App.css';
import LogIn from './Pages/LogIn';
import PaginaInicial from './Pages/PaginaInicial'
import NotFound404 from './Pages/NotFound404'


/*https://pt-br.reactjs.org/docs/state-and-lifecycle.html */


class App extends Component {
    render ( ) {
        return (
            <LogIn />
            // <Router>
            //     <Switch>
            //         <Route path="/Pages/LogIn" component={LogIn} />
            //         <Route path="/Pages/PaginaInicial" component={PaginaInicial} />
            //         <Route path="*" component={NotFound404} />
            //     </Switch>
            // </Router>
        );
    }
}

export default App;
