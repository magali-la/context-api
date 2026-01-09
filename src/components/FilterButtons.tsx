export default function FilterButtons() {

    return (
        <div className="flex flex-row w-full justify-center gap-8">
            <button className="bg-amber-600! text-white" value="All">All</button>
            <button className="bg-orange-700" value="All">Active</button>
            <button className="bg-orange-700" value="All">Completed</button>
        </div>
    )
}