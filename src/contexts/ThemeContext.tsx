import React, { createContext, useEffect, useState } from "react";
import type { ThemeContextType, Themes } from "../types";

// create ThemeContext
export const ThemeContext = createContext<ThemeContextType | null>(null);

// write a theme provider function with toggle function
export function ThemeProvider({ children }: { children: React.ReactNode}) {
    // add state for the theme and initialize with whats from local storage or default to 'light'
    const [theme, setTheme] = useState<Themes>(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            return storedTheme as Themes;
        } else {
            return 'light';
        }
    });

    // use effect to set it in local storage once the theme has been changed and also change the class to dark for it to apply
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }

        // set local no matter the outcome
        localStorage.setItem('theme', theme)
    }, [theme]);

    function toggleTheme() {
        // if theme is light then switch the theme to dark if the button is clicked and vice versa
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    // these are the values that will be able to be exported
    const value: ThemeContextType = {
        // set the value you're exporting as the state variable
        theme: theme,
        toggleTheme
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}