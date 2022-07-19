import './App.css';
import Header from './Components/Header';
import Todos from './Components/Todos';
import Footer from './Components/Footer';
import React,{useState} from 'react';
import AddTodo from './Components/AddTodo';

function App() {

  const onDelete=(todo)=>{
    console.log("i am onDelete of todo", todo);
    //to delete a doto
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
  }

  const addTodo=(title,desc)=>{
    console.log("I am adding a todo for ",title , desc)
    let sno;
    if(todos.length===0){
      sno=0;
    }
    else{
      sno=todos[todos.length-1].sno+1
    }
    const myTodo={
      sno:sno,
      title: title,
      desc:desc
    }
    console.log(myTodo);
    setTodos([...todos,myTodo]);
  }

  const [todos,setTodos]=useState([
    {
      sno:1,
      title:"Go to Market",
      desc: "you need to do this by 5PM"
    },
    {
      sno:2,
      title:"Do Study",
      desc: "you need to do study for atleast 2 hours"
    },
    {
      sno:3,
      title:"Play Games",
      desc: "Go out and play some games for atleast 2 hours"
    }
  ]);
  return (
    <>
    <Header  title="MyTodoList"/>
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    <h1>Hello world</h1>
    </>
  );
}

export default App;
