import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewTask from './components/NewTask';
import ToDo from './components/ToDo';


class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      list: ['Todo 1', 'Todo 2'],
    }
    this.addTodo = this.addTodo.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(val){
    this.setState(() => {
      return {
        input: val,
      }
    })
  }

  addTodo(){
    let newInput = this.state.input;
    let newList = this.state.list.slice()
    newList.push(newInput);
    this.setState(() => {
      return {
        list: newList,
        input: '',
      }
    })
  }

  render() {
    return (
      <div className="App">
      <h2>My Todo List</h2>
      <input placeholder='Enter new Todo' value={this.state.input} onChange={event => this.updateInput(event.target.value)}/>
      <NewTask todo={this.addTodo}/>
      <ToDo list={this.state.list}/>
      </div>
    );
  }
}

export default App;
