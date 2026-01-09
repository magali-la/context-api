import { useContext, useState } from "react"
import { TodoDispatchContext } from "../contexts/TodoContext";

export default function TodoInput() {
    const [input, setInput] = useState('');

    // get dispatch
    const { addTodo } = useContext(TodoDispatchContext)!;

    // handler for input
    function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
        setInput(event.target.value);
    }

    function handleAdd() {
        console.log('Adding a todo item:', input)
        // use dispatch action ADD_TODO and check to make sure it isn't empty
        if(input.length !== 0) addTodo(input);
        // clear the input field
        setInput('');
    }

    return (
        <div className="flex flex-row gap-8">
            <label htmlFor="toDoInput" aria-hidden></label>
            <input type="text" id="toDoInput" aria-label="write to do item" className="py-1 px-4 bg-white rounded-xl items-start w-full" placeholder="Add item to list..." value={input} onChange={handleInput}/>
            <button aria-label="add to do item" className="bg-green-400" onClick={handleAdd}>Add</button>
        </div>
    )
}