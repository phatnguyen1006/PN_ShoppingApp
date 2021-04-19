import React, { createContext, useState } from 'react';

// create Prodiver
export const ThemeProvider = createContext();

const Theme = ({children}) => {
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
        <ThemeProvider.Theme value={{ theme, changeTheme }}>
            {children}
        </ThemeProvider.Theme>
    );
}