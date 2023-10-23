import { useContext } from 'react';
import { LogedContext } from '../context/Loged';
import { useState } from 'react';

export  const useLoged = () => {
    const {isLoged, setIsLoged, token, setToken} = useContext(LogedContext)
    



    const logIn = () => {
        setIsLoged(true)
        window.localStorage.setItem("loged", true)
        
    }

    const logOut = () => {
        setIsLoged(false)
        window.localStorage.clear("loged")
        window.localStorage.clear("token")
        // console.log(window.localStorage.getItem("loged"))
    }


    const handleToken = (t) => {

        setToken(t)

    }

    return {isLoged, setIsLoged, logIn, logOut, token, setToken,handleToken}
  }

