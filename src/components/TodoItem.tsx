import { useContext, useState } from "react";
import type { TodoItemProps } from "../types";
import { TodoDispatchContext } from "../contexts/TodoContext";

export default function TodoItem({ todo }: TodoItemProps) {
    // import the context dispatch actions needed w nonnull to avoid ts errors
    const { toggleTodo, editTodo, deleteTodo} = useContext(TodoDispatchContext)!;

    // use state for editing
    const [isEditing, setIsEditing] = useState(false);
    // use state for the new text after editing / set it as what came in
    const [newInput, setNewInput] = useState(todo.text);

    // write handlers and pass id as an argument
    function handleToggle() {
        toggleTodo(todo.id);
    }

    // this is going to handle setting the new input
    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setNewInput(event.target.value);
    }

    // this is what happenes when the save button is pressed
    function handleEdit() {
        // save mode
        if (isEditing) {
            editTodo(todo.id, newInput);
            setIsEditing(false)
        } else {
            // editing mode
            setIsEditing(true);
        }
    }

    function handleDelete() {
        deleteTodo(todo.id);
    }

    return (
        <div className="flex flex-row justify-between px-2 py-2 rounded-2xl bg-white">
            {/* toggle completed */}
            <input type="checkbox" className="accent-green-500" aria-label="mark todo as completed" checked={todo.completed} onChange={handleToggle}/>
            {/* the todo text as readonly input */}
            <input type="text" value={newInput} onChange={handleInputChange} readOnly={isEditing === false}/>

            {/* edit button */}
            <button aria-label="edit todo item" className="px-2 text-yellow-700" onClick={handleEdit}>
                {/* turn it to  save button */}
                {isEditing ? 'Save' : 'Edit'}
            </button>
            {/* delete button */}
            <button aria-label="delete todo item" className="px-2 text-red-600" onClick={handleDelete}>Delete</button>
        </div>
    )
}