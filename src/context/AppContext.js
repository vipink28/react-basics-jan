import { createContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    return (
        <AppContext.Provider value="hello new context">
            {children}
        </AppContext.Provider>
    )
}

export default AppContext;