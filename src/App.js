import React from 'react';
import { TextInput } from '@bit/grommet.grommet.text-input';
import logo from './logo.svg';
import './App.css';

class Example extends React.Component {
  state = { text: '' };

  render() {
    const { text } = this.state;
    return (
      <div>
        <TextInput
          value={text}
          onChange={event => this.setState({ text: event.target.value })}
        />
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
