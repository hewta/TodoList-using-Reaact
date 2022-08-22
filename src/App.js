
import './App.css';

import Header from "./MyComponents/Header";
import {Footer} from "./MyComponents/Footer";
import {Todos} from "./MyComponents/Todos";
import {AddTodo} from "./MyComponents/AddTodo";

import React, { useState } from 'react';



function App(todo) {
  const onDelete = (todo)=>{
    console.log("I am Ondelete of todo",todo);
    //deleting in below way in react does not work
    // let index=todos.indexOf(todo);
    // todos.splice(index,1);

    setTodos(todos.filter((e)=>{
        return e!==todo;
    }));
  }

  const addTodo=(title, desc) => {
    console.log("I am adding this todo",title, desc)
    let sno;
    if(todos.length==0){
      sno=0;
    }
    else{
      sno = todos[todos.length-1].sno + 1;
    }
    const myTodo = {
      sno:sno,
      title:title,
      desc:desc,
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
  }


  //makiing array of object below
  //setToDos is a function which will update thease todos so har baar mein new todos dalunga or wo update ho jaega
  const [todos, setTodos] = useState([
    {
      sno:1,
      title:"Go to the market",
      desc:"You need to go to the market to get this job done"
    },

    {
      sno:2,
      title:"Go to the Mall",
      desc:"You need to go to the mall to get this job done"
    },

    {
      sno:3,
      title:"Go to the clinic",
      desc:"You need to go to the clinic for health checkup"
    },
  ]);
  
  return (
    <>
     <Header title="My todos List" searchBar={false}/>
     <AddTodo addTodo={addTodo}/>
     <Todos todos={todos} onDelete={onDelete}/>
     <Footer />

    </>
    // <div className="App">
    //   <header className="App-header">
    //     <div>{12+12}</div>
    //     <div>{x}</div>
    //     <p>hi</p>
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
