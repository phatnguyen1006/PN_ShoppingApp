import React, { useReducer, createContext } from "react";

// Create Context
export const BarTheme = createContext();

// Provider
const BarThemeProvider = ({children}) => {
    
    // The Begin Value of Reducer
    const INIT_VALUE = { color: false };

    // Reducer
    const barReducer = (barState, barAction) => { 
        switch (barAction.type)
        {
            case 'CHANGE':
                return {
                    ...barState,
                    color: barAction.payload.color
                };
            default:
                return barState;
        }
    }

    // Func to Set dispatch:
    const changeBar = () => {
        dispatch({
            type: 'CHANGE',
            payload: {
                color: !barState.color
            }
        });
    }

    // INITIAL Reducer:
    const [barState, dispatch] = useReducer(barReducer, INIT_VALUE);
    

    // Return Provider
    return (
        <BarTheme.Provider value={{ barState, changeBar }}>
            {children}
        </BarTheme.Provider>
    )

}

export default BarThemeProvider;