import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import uuid from 'react-uuid';

function App() {
  const [todos, setTodos] = useState([]);
  function addTodo(data){
    setTodos([...todos,data]);   
  }
  function deleteTodo(index){
    setTodos(()=>{
      return(
        todos.filter((todo,i)=>{
          return i!==index;
        })
      )
    })
  }
  return (
    <div>
      <Header />
      <CreateArea addTodo={addTodo}/>
      {
        todos.map((todo,index)=>{
          return <Note key={uuid()} deleteTodo={deleteTodo} index={index} title={todo.title} content={todo.content} />
        })
      }
      <Footer />
    </div>
  );
}

export default App;
