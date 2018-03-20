import React, { Component } from 'react';

function NewTask (props){
        return (
            <button onClick={event => props.todo()}></button>
        )
}



export default NewTask;
