import React, { Component } from 'react';

function ToDo (props){
    let todosdown = props.list;
    return (
        <div>
        {todosdown}
        </div>
    )
}

export default ToDo
