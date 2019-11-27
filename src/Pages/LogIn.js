import React from 'react';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';

class LogIn extends React.Component {

    constructor (props) {
        super(props);
        
        this.state = {
            text: '',
            entrar: false
        };
        
        this.inputHandler = this.inputHandler.bind(this);
        this.verifyEmail = this.verifyEmail.bind(this);
    }
  
    inputHandler (event) {
        this.setState ( {text: event.target.value} );
    }
  
    verifyEmail (event) {
        if (validarEmail(this.state.text)){
          this.setState ( {entrar: true});
          RedirectPaginaIncial(this.state.entrar);
        }
        else {
          this.setState ( {entrar: false} );
        }
    }
    render() {

    return (
      <div>
        <input
          type="text"
          placeholder="Insira seu email"
          value={this.state.text}
          onChange={this.inputHandler}
        ></input>
        
        <button type="button" onClick={this.verifyEmail}>Entrar</button>
      </div>
    );
  }
}

function RedirectPaginaIncial(emailValido) {
  if (emailValido) {
    return <Router><Redirect path="./Pages/PaginaInicial"/></Router>
  }
  else {
    alert("Email insirido invalido");
    return;
  }
}

function validarEmail (email) {

    console.log(email);
    
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mailformat.test(email)) {
        return true;
    }
    else {
        return false;
    }   
}

export default LogIn;
