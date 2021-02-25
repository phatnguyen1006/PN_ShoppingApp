import React, { useState, createContext } from 'react';

export const ReferenceContext = createContext();

const ReferenceContextProvider = ({children}) => {
    const [redirect, setRedirect] = useState(false);

    // return Provider
    return (
        <ReferenceContext.Provider value={{redirect, setRedirect}}>
            {children}
        </ReferenceContext.Provider>
    );
}

export default ReferenceContextProvider;