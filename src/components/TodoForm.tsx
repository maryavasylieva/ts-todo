import React, { useState, useRef } from 'react'
import { ITodoForm, ITodo } from '../interfaces'
import shortid from 'shortid';





export const TodoForm: React.FC<ITodoForm> = (props) => {
    // == using useRef Hooks ==
    const ref = useRef<HTMLInputElement>(null);

    const [formState, setFormState] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormState(event.target.value)
    }

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            const newTodo: ITodo = {
                id: shortid.generate(),
                title: formState,
                completed: false

            }
            props.handleTodoCreate(newTodo);

            if(ref && ref.current){
                ref.current.value = ''
            }
        }

    }



    return (
        <div className="input-field top-margin">
            <input
                ref={ref}
                type="text"
                id='title'
                placeholder="Add a new task"
                onKeyPress={keyPressHandler}
                onChange={handleInputChange}
            />
            <label htmlFor="title" className="active">
                Add a new task
          </label>
        </div>
    )
}
