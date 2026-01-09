// todo task type
export interface Todo {
    // will be set using Date.now()
    id: number;
    // the input value
    text: string;
    // for toggling the completed checkmark
    completed: boolean;
}

// TodoContext type - this is the context managing the todos array or the data
export interface TodoContextType {
    todos: Todo[];
}

// TodoDispatchContext type - this is the context managing the function props to manipulate the data
export interface TodoDispatchContextTypes {
    addTodo: (input: string) => void;
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
    editTodo: (id: number, newInput: string) => void;
    clearCompleted: () => void;
}

// props for TodoItem
export interface TodoItemProps {
    todo: Todo;
}