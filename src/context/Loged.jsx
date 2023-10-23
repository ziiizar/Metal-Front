import { createContext, useState } from "react";

export const LogedContext = createContext()


export function LogedProvider ({children}) {

    const [isLoged, setIsLoged] = useState(localStorage.getItem("loged"))
    const [token, setToken] = useState()
    

    return (
        <LogedContext.Provider value={{isLoged, setIsLoged, token,setToken}}>
            {children}
        </LogedContext.Provider>  
    )
    
}