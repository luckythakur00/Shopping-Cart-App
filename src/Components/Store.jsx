import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GloableState({ children }) {
    const [cart, setCart] = useState([]);

    return <GlobalContext.Provider value={{ cart, setCart }} >
        {children}
    </GlobalContext.Provider>
}