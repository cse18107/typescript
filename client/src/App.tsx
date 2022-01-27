import React from 'react';
import Todo from './models/todo';
import './App.css';
import Todos from './components/Todos';

const items :Todo[]=[new Todo(new Date().toString(),'Learn React'),new Todo(new Date().toString(),'Learn TypeScript')];

function App() {
  return (
    <div>
      <Todos items={items}/>
    </div>
  );
}

export default App;
