import React, { useState, useEffect } from 'react';
import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';
import { ITodo } from '../interfaces';

export const TodosPage: React.FC = () => {

    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];

        setTodos(saved)
    }, [])


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    // const addHandler = (title: string) => {
    //     const newTodo: ITodo = {
    //         title: title,
    //         id: Date.now(),
    //         completed: false
    //     }

    //     // setTodos([newTodo, ...todos])
    //     setTodos(prev => [newTodo, ...prev])
    // }

    // const toggleHandler = (id: number) => {
    //     setTodos(prev => prev.map(todo => {
    //         if (todo.id === id) {
    //             return {
    //                 ...todo,
    //                 completed: !todo.completed
    //             }
    //             // todo.completed = !todo.completed
    //         }
    //         return todo
    //     }))
    // }

    // const removeHandler = (id: number) => {
    //     const shouldRemove = confirm('Are you sure you want to delete an item?')
    //     if (shouldRemove) {
    //         setTodos(prev => prev.filter(todo => todo.id !== id))

    //     }
    // }

    const handleTodoCreate = (todo: ITodo) => {
        const newTodoState: ITodo[] = [...todos];
        console.log(newTodoState)

        newTodoState.push(todo);

        setTodos(newTodoState)
    }

    const handleTodoUpdate = (event: React.ChangeEvent<HTMLInputElement>, id: string) => {
        const newTodoState: ITodo[] = [...todos];

        newTodoState.find((todo: ITodo) => todo.id === id)!.title = event.target.value;

        setTodos(newTodoState);
    }


    const handleTodoRemove = (id: string) => {
        const newTodoState: ITodo[] = todos.filter((todo: ITodo) => todo.id !== id)

        setTodos(newTodoState);
    }

    const handleTodoComplete = (id: string) => {
        const newTodoState: ITodo[] = [...todos];

        newTodoState.find((todo: ITodo) => todo.id === id)!.completed = !newTodoState.find((todo: ITodo) => todo.id === id)!.completed;

        setTodos(newTodoState);
    }

    const handleTodoBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length === 0) {
            event.target.classList.add('todo-input-error')
        } else {
            event.target.classList.remove('todo-input-error')
        }
    }


    return (
        <div className='todo-list-app'>
            <TodoForm
                todos={todos}
                handleTodoCreate={handleTodoCreate} />
            <TodoList
                todos={todos}
                handleTodoBlur={handleTodoBlur}
                handleTodoUpdate={handleTodoUpdate}
                handleTodoComplete={handleTodoComplete}
                handleTodoRemove={handleTodoRemove} />
        </div>
    )
}
