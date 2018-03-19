import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      output: '',
    }
  }

  updateOutput(val){
    this.setState(()=> {
      return {
        output: val,
      }    
    })
  }


  render() {
    return (
      <div className='App'>
        <input className='input' placeholder="This is whats being rendered" onChange={event => this.updateOutput(event.target.value)}/>
        <p className='output'>{this.state.output}</p>
      </div>
    );
  }
}

export default App;
