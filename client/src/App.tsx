import React,{useState} from 'react';
import Todo from './models/todo';
import './App.css';
import Todos from './components/Todos';
import NewTodo from './components/NewTodo';

function App() {
  const [ todos, setTodos ] = useState<Todo[]>([]);

  const addTodoHandler=(text:string)=>{
    const newTodo = new Todo(text);
    setTodos((prevTodos)=>{
      return prevTodos.concat(newTodo)
    });
  };

  const removeTodoHandler =(todoId:string)=> {
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo=> todo.id !== todoId);
    })
  }

  console.log(todos);
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
