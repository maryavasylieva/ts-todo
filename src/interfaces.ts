export interface ITodo {
    id: string,
    title: string,
    completed: boolean
}


export interface ITodoForm {
    todos: ITodo[],
    handleTodoCreate: (todo: ITodo) => void
}

export interface ITodoList {
    todos: ITodo[],
    handleTodoUpdate: (event:React.ChangeEvent<HTMLInputElement>, id:string) => void,
    handleTodoBlur: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleTodoComplete: (id: string) => void,
    handleTodoRemove: (id: string) => void
}

export interface ITodoItem {
    todo: ITodo,
    handleTodoUpdate: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void,
    handleTodoRemove: (id: string) => void,
    handleTodoComplete: (id: string) => void,
    handleTodoBlur: (event: React.ChangeEvent<HTMLInputElement>) => void
}
