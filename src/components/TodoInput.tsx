import { useState } from "react"

export default function TodoInput() {
    const [input, setInput] = useState('');

    // handler for input
    function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
        setInput(event.target.value);
    }

    function handleAdd() {
        console.log('Adding a todo item:', input)
    }

    return (
        <div className="flex flex-row gap-8">
            <label htmlFor="toDoInput" aria-hidden></label>
            <input type="text" id="toDoInput" aria-label="write to do item" className="py-1 px-4 bg-white rounded-xl items-start w-full" placeholder="Add item to list..." value={input} onChange={handleInput}/>
            <button aria-label="add to do item" className="bg-green-400" onClick={handleAdd}>Add</button>
        </div>
    )
}