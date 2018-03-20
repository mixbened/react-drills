import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './components/Image'

class App extends Component {
  constructor(){
    super();
    this.state = {
      imageUrl: 'https://http.cat/412'
    }

  }

  render() {
    return (
      <div className="App">
      <Image url={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
