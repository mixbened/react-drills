import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDo from './components/ToDo'

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      todos: ['Chewing Gum', 'Throw away Gun', 'be awesome'],
    }
    this.setInput = this.setInput.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  setInput(val){
    this.setState(() => {
      return {
        input: val,
      }
    })
  }

  addTodo(){
    this.setState(() => {
      return {
        todos: [...this.state.todos, this.state.input],
        input: '',
      }
    })
    console.log(this.state.todos)
  }



  render() {
   let list = this.state.todos.map((el, index) => {
   return (<p>{el}</p>)})
    return (
      <div className="App">
      <h2>My ToDo List</h2>
      <input value={this.state.input} onChange={event => this.setInput(event.target.value)}/>
      <button onClick={this.addTodo}>Add</button>
      <ToDo list={list}/>
      </div>
    );
  }
}

export default App;
