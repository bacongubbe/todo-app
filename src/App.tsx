import { useState } from 'react'

import './App.css'
import { Todo } from './types'
import { TodoContainer } from './components/TodoContainer'
import { TodoForm } from './components/TodoForm'

function App() {
  const fromStorage = window.localStorage.getItem('todos');
  const [todos, setTodos] = useState<Todo[]>(fromStorage ? JSON.parse(fromStorage) : [])

  return (
    <>
      <h1>Cool Todo App Very Unique</h1>
      <TodoForm setTodos={setTodos} />
      <TodoContainer todos={todos} setTodos={setTodos} />
    </>
  )
}

export default App
