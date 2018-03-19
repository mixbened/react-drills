import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      output: ['SuperMario', 'Zelda', 'King Kong'],
    }
  }


  render() {
    return (
      <div className="App"><ul>
      {this.state.output.map((hero) => <li><h2>{hero}</h2></li> )}
      </ul></div>
    );
  }
}

export default App;
