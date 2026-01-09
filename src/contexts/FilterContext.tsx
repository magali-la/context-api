import { createContext, useState } from "react";
import type { FilterContextType, Filters } from "../types";

// create context with type or null
export const FilterContext = createContext<FilterContextType | null>(null);

// create provider with state
export function FilterProvider({ children }: { children: React.ReactNode }) {
    const [selectedFilter, setSelectedFilter] = useState<Filters>('all');
    
    // set up function for setting Filter
    function setFilter(filter: Filters) {
        console.log('Changing the filter to: ', filter);

        // set the state
        setSelectedFilter(filter);
    }

    // these are the values that will be able to be exported
    const value: FilterContextType = {
        // set the value you're exporting as the state variable
        filter: selectedFilter,
        setFilter
    }

    return (
        // wrap filter around children
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    )
}
