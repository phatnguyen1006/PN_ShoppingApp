import React, { createContext, useState } from 'react';

// create Prodiver
export const ThemeContext = createContext();

const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState({
        background: "rgb(69, 64, 64)",
        color: "rgb(216, 212, 212)"
    });

    const changeTheme = () => {
        setTheme({
            background: "rgb(216, 212, 212",
            color: "rgb(69, 64, 64)"
        });
    }

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;