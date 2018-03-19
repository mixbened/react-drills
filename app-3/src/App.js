import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      array: ['mario barth', 'king kong', 'zelda']
    }
  }

  filterArray(val){
    this.setState(() => {
      return {
        input: val,
      }
    })
  }
  
  render() {
    let heroDisplay = this.state.array.filter(el => {
      return el.includes(this.state.input);
    }).map((hero) => <li><h4>{hero}</h4></li>)
    return (
      <div className="App">
      <input onChange={event => this.filterArray(event.target.value)} type='text'/>
      <ul>{heroDisplay
        }</ul>
      </div>
    );
  }
}

export default App;
