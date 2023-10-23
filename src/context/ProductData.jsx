import { createContext, useState } from "react";

export const ProductDataContext = createContext()


export function ProductDataProvider ({children}) {

    const [data, setData] = useState([])
    // const [token, setToken] = useState()
    

    return (
        <ProductDataContext.Provider value={{data,setData}}>
            {children}
        </ProductDataContext.Provider>  
    )
    
}