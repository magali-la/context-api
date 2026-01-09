// todo task type
export interface Todo {
    id: string;
    text: string;
    completed: boolean;
}

// TodoContext types
export interface TodoContextType {
    todos: Todo[];
    addTodo: (input: string) => void;
    toggleTodo: (id: string) => void;
    deleteTodo: (id: string) => void;
    editTodo: (id: string, newInput: string) => void;
    clearCompleted: () => void;
}