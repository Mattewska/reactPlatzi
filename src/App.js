import React, { useState } from 'react'
import { TodoCounter } from './components/TodoCounter/TodoCounter'
import { TodoSearch } from './components/TodoSearch/TodoSearch'
import { TodoList } from './components/TodoList/TodoList'
import { TodoItem } from './components/TodoItem/TodoItem'
import { TodoModal } from './components/todoModal/todoModal'
import { CreateTodoButton } from './components/CreateTodoButton/CreateTodoButton'
import './App.css';


function App() {
  //todo: Search State

  const defaulTodos = [
    {todo: 'tarea 1', completed: false},
    {todo: 'tarea 2', completed: true}
  ];

  const [todos, setTodos] = React.useState(defaulTodos);
  const [searchValue, setSearchValue] = React.useState('');

  let totalTodos = todos.length;
  let completedTodos = todos.filter(todos => todos.completed == true).length;

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      
      <TodoList>
        {todos.map(items => (
          <TodoItem key={items.todo} todo={items.todo} completed={items.completed}/>
          
        ))}
      </TodoList>

      <CreateTodoButton/>

    </>
  );
}

export default App;
