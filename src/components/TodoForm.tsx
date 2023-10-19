import { FC, useRef } from "react"
import { Todo } from "../types";
import { v4 as uuid } from "uuid";

type Props = {
    // eslint-disable-next-line @typescript-eslint/ban-types
    setTodos: Function
}

export const TodoForm: FC<Props> = ({ setTodos }) => {

    const inputRef = useRef<HTMLInputElement>({} as HTMLInputElement);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newTask = inputRef.current!.value
        if (newTask === '') {
            return;
        }
        const newTodo: Todo = {
            id: uuid(),
            task: newTask,
            completed: false
        }
        setTodos((curr: Todo[]) => {
            const newArr = [...curr, newTodo];
            window.localStorage.setItem('todos', JSON.stringify(newArr));
            return newArr;
        })
        inputRef.current!.value = '';
    }


    return (
        <form onSubmit={handleSubmit} >
            <legend>Add a todo!</legend>
            <input ref={inputRef} placeholder="add a task" />
            <button type="submit" >Submit</button>
        </form>
    )
}
