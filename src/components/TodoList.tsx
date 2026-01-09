import { useContext } from "react"
import { TodoContext } from "../contexts/TodoContext"
import TodoItem from "./TodoItem";
import { FilterContext } from "../contexts/FilterContext";

export default function TodoList() {
    // import todos array using nonnull assertion for typescript errors
    const { todos } = useContext(TodoContext)!;

    // import filters to use a new value to map by each filter selected
    const { filter } = useContext(FilterContext)!;

    // filter the matches from todos array of all tasks - determine whaat the condition is, if active then completed should be false and keep those ones
    const filteredTodos = todos.filter(todo => {
        if (filter === 'active') {
            return !todo.completed;
        } else if (filter === 'completed') {
            return todo.completed;
        } else {
            // this baasically just says return everything for a filter method since it's checking for true
            return true;
        }
    });

    return (
        <div className="w-full flex flex-col gap-2">
            {/* map the items into the list */}
            {filteredTodos.map(todo => (
                <TodoItem 
                    key={todo.id}
                    // pass todo prop down to the TodoItem
                    todo={todo}
                />
            ))}
        </div>
    )
}