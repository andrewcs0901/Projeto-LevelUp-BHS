import React from 'react';

class LogIn extends React.Component {

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

export default LogIn;
