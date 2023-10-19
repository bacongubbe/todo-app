/* eslint-disable @typescript-eslint/ban-types */
import React, { FC, useState } from 'react'
import { Todo } from '../types'

type Props = {
    todo: Todo
    setTodos: Function
}

export const TodoCard: FC<Props> = ({ todo, setTodos }) => {

    const [complete, setComplete] = useState<boolean>(todo.completed)

    const handleDelete = () => {
      setTodos((curr : Todo[])=> {
        const newArr = curr.filter(it => it.id !== todo.id);
        window.localStorage.setItem('todos', JSON.stringify(newArr));
        return newArr
      })
    }

    return (
        <article style={complete ? { backgroundColor: "green", order: "1" } : { backgroundColor: "purple" }} >
            <p>{todo.task}</p>
            <button onClick={() => setComplete(curr => !curr)} >{complete ? 'uncompletefy' : 'complete'}</button>
            {complete && <button onClick={handleDelete}>yeet</button>}
        </article>
    )
}
