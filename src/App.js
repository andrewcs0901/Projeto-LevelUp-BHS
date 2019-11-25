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
  }

  render() {
    const { text } = this.state;
    return (
      <div>
        <input
          type="text"
          onChange={this.props.}
        ></input>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      {Example}
    </div>
  );
}

export default App;
