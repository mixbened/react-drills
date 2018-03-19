import React, { Component } from 'react';

class Login extends Component {
    constructor(){
        super();
        this.state = {
            user: '',
            password: '',
        }
    }

    handleUsername(val){
        this.setState(() => {
            return {
            user: val,
            }
        })
    }

    handlePassword(val){
        this.setState(() => {
            return {
            password: val,
            }
        })
    }

    alertUser(){
        alert('User: ' + this.state.user + 'Passwort: '+ this.state.password)
    }


    render() {
      return (
          <div>
        <input onChange={event => this.handleUsername(event.target.value)} placeholder="username"/>
        <input onChange={event => this.handlePassword(event.target.value)} placeholder="password"/>
        <button onClick={() => this.alertUser()}>Login</button>
        <p>Simple Login Form</p>
        </div>
      );
    }
  }
  
  export default Login;