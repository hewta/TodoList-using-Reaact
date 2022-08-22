import React from 'react'
import {TodoItem} from "../MyComponents/TodoItem";
export const Todos = (props) => {
  let myStyle = {
    minHeight:"70vh"
  }
  return (
    <div className="container my-4" style={myStyle}>
      <h3 className="mb-5 text-center">Todos List</h3>
      <div className="container-main d-flex flex-row ">
        {props.todos.length===0?"No todos to display": 
        props.todos.map((todo) =>{
              return (
                <>
              <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/> <hr/>
              </>
              )
        })
         }
      </div>
       
        
    </div>
  )
}
