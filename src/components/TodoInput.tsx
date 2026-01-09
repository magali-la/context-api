export default function TodoInput() {

    return (
        <div className="flex flex-row gap-8">
            <label htmlFor="toDoInput" aria-hidden></label>
            <input type="text" id="toDoInput" aria-label="write to do item" className="py-1 px-4 bg-white rounded-xl items-start w-full" placeholder="Add item to list..."/>
            <button aria-label="add to do item" className="bg-green-400">Add</button>
        </div>
    )
}