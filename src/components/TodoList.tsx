import { useContext } from "react"
import { TodoContext } from "../contexts/TodoContext"
import TodoItem from "./TodoItem";

export default function TodoList() {
    // import todos array using nonnull assertion for typescript errors
    const { todos } = useContext(TodoContext)!;

    return (
        <div className="w-full flex flex-col gap-2">
            {/* map the items into the list */}
            {todos.map(todo => (
                <TodoItem 
                    key={todo.id}
                    // pass todo prop down to the TodoItem
                    todo={todo}
                />
            ))}
        </div>
    )
}