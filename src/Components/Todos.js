import React from 'react'
import TodoItems from './TodoItems'

export default function Todos(props) {
  let mystyle={
    minHeight: "70vh",
    margin:"40px auto"

  };
  return (
    <div className="container" style={mystyle}>
        <h3 className='text-center my-3'>Todos List</h3>

        {props.todos.length===0?"No Todos to display":
        props.todos.map((todo)=>{
        return (
        <>
        <TodoItems todo={todo} key={todo.sno} onDelete={props.onDelete}/><hr/>
        </>
         )
       })}
          </div>
  )
} 
