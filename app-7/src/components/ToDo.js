import React, { Component } from 'react';

function ToDo (props){
    let list = props.list.map((el) => <p>{el}</p>)
    return (
        <div>
        {list}
        </div>
    )
}

export default ToDo;
