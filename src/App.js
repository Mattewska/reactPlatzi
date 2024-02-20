import { TodoCounter } from './components/TodoCounter/TodoCounter'
import { TodoSearch } from './components/TodoSearch/TodoSearch'
import { TodoList } from './components/TodoList/TodoList'
import { TodoItem } from './components/TodoItem/TodoItem'
import { TodoModal } from './components/todoModal/todoModal'
import { CreateTodoButton } from './components/CreateTodoButton/CreateTodoButton'
import './App.css';


let tareas = [
  {tarea:'tarea 1', completado: true},
  {tarea:'tarea 2', completado: false}
]


function App() {
  return (
    <>
      <TodoCounter completed={5} total={10} />
      <TodoSearch />
      
      <TodoList>
        {tareas.map(items => (
          <TodoItem key={items.tarea} tarea={items.tarea} completed={items.completado}/>
        ))}
      </TodoList>

      <CreateTodoButton/>

      <TodoModal/>
    </>
  );
}

export default App;
