import { useContext } from "react"
import { FilterContext } from "../contexts/FilterContext"
import type { Filters } from "../types";

export default function FilterButtons() {
    // non null value for ts error
    const { filter, setFilter } = useContext(FilterContext)!;

    // handle filter select
    function handleFilterSelect(event: React.MouseEvent<HTMLButtonElement>) {
        // use currenttarget for button precision and as keyword to ensure ts its correct
        setFilter(event.currentTarget.value as Filters);
    }

    // conditional style for active status via ternary or default styling in index.css
    const activeStyle = 'bg-amber-600! text-white';

    return (
        <div className="flex flex-row w-full justify-center gap-8">
            <button className={filter === 'all' ? activeStyle : ''} value="all" onClick={handleFilterSelect}>All</button>
            <button className={filter === 'active' ? activeStyle : ''} value="active" onClick={handleFilterSelect}>Active</button>
            <button className={filter === 'completed' ? activeStyle : ''} value="completed" onClick={handleFilterSelect}>Completed</button>
        </div>
    )
}