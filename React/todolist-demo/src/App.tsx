import TodoList from './components/TodoList/index';
import TodoItem from './components/TodoItem/index';
import TodoFilter from './components/TodoFilter/index';
import { useState } from 'react';
import { todo } from './type/todo'

function App() {
  const [todos, setTodos] = useState<todo[]>([]);
  const [filter, setFilter] = useState('all')
  const addTodo = (content:string) => {
    setTodos([...todos, {
      id: todos.length + 1,
      content: content,
      completed: false
    }]);
  }
  const delTodo = (id:number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  const toggleTodo = (id:number) => {
    setTodos(todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo));
  }
  const filterTodos = ():todo[] => {
    switch (filter) {
      case 'active':
        return todos.filter((todo) => !todo.completed);
      case 'completed':
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  }
  return (
    <>
      <h1>Todo List</h1>
      <TodoList addTodo={addTodo} />
      <TodoItem todos={filterTodos()} delTodo={delTodo} toggleTodo={toggleTodo}/>
      <TodoFilter setFilter={setFilter} />
    </>
  );
}

export default App;
