import React from 'react';
import { ITodoItem } from '../interfaces';


export const TodoItem: React.FC<ITodoItem> = (props) => {
    return (
        <div className='todo-item'>
            <div onClick={() => props.handleTodoComplete(props.todo.id)}>
                {
                    props.todo.completed ? (
                        <span className="todo-item-checked">&#x2714;</span>
                    ) : (
                            <span className="todo-item-unchecked" />
                        )
                }
            </div>

            <div className='todo-item-input-wrapper'>
                <input
                    value={props.todo.title}
                    onBlur={props.handleTodoBlur}
                    onChange={(event) => props.handleTodoUpdate(event, props.todo.id)}
                />
            </div>

            <div className="item-remove" onClick={() => props.handleTodoRemove(props.todo.id)}>
                &#x02A2F;
            </div>
        </div>
    )
}
