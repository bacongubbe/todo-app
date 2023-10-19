/* eslint-disable @typescript-eslint/ban-types */
import { FC } from 'react'
import { Todo } from '../types'
import { TodoCard } from './TodoCard'

type Props = {
  todos: Todo[],
  setTodos : Function
}

export const TodoContainer: FC<Props> = ({ todos, setTodos }) => {


  return (
    <main style={{display: 'flex', flexDirection: 'column'}}>
      {todos &&
        todos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} setTodos={setTodos} />
        ))}
    </main>
  )
}
