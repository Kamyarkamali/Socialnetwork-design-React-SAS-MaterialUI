import { createContext, useEffect, useState } from "react";


export const CurrentUser=createContext();

export const CurrentUserProvider=({children})=>{
    const [currentUser,setCurrentUser]=useState(JSON.parse(localStorage.getItem("user") || null))

    const login=()=>{
    }

    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(currentUser))
    },[currentUser])


    return(
        <CurrentUser.Provider value={{createContext,login}}>
                {children}
        </CurrentUser.Provider>
    )
}