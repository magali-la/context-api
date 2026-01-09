import type { ReactNode } from "react";
import { TodoProvider } from "../contexts/TodoContext";

// this is going to serve as a nested wrapper for all the providers in the app. The parameter is the child React node elements, which is going to be our App, since it wraps around everything
export function AppProviders({ children }: { children: ReactNode}) {

    // return JSX
    return (
        <TodoProvider>
            {children}
        </TodoProvider>
    )
}