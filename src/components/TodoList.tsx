import React from 'react';
import { ITodoList } from '../interfaces';
import { TodoItem } from './TodoItem';



export const TodoList: React.FC<ITodoList> = (props) => {

    if (props.todos.length === 0) {
        return <p className='center'>No tasks at all</p>
    }

    return (
        <ul>
            {props.todos.map(todo => (

                <li key={todo.id}>
                    <TodoItem
                        todo={todo}
                        handleTodoUpdate={props.handleTodoUpdate}
                        handleTodoBlur={props.handleTodoBlur}
                        handleTodoRemove={props.handleTodoRemove}
                        handleTodoComplete={props.handleTodoComplete}

                    />
                </li>

            ))}

        </ul>
    )
}
