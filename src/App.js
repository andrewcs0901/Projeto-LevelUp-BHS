import React from 'react';
import logo from './logo.svg';
import './App.css';

{/*https://pt-br.reactjs.org/docs/state-and-lifecycle.html */}

class Example extends React.Component {

    constructor (props) {
        super(props);
        
        this.state = {
            text: '' 
        };
        
        this.inputHandler = this.inputHandler.bind(this);
        this.verifyEmail = this.verifyEmail.bind(this);
    }
  
    inputHandler (event) {
        this.setState ( {text: event.target.value} );
    }
  
    verifyEmail (event) {
        console.log(validarEmail(this.state.text));
    }
  
    render() {
    const { text } = this.state;
    return (
      <div>
        <input
          type="text"
          value={this.state.text}
          onChange={this.inputHandler}
        ></input>
        
        <button type="button" onClick={this.verifyEmail}>Entrar</button>
      </div>
    );
  }
}

function validarEmail (email) {

    console.log(email);
    
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mailformat.test(email)) {
        return true;
    }
    else {
        alert("Email insirido invalido");
        return false;
    }   
}


function App() {
  return (
    <div className="App">
      {Example}
    </div>
  );
}

export default Example;
