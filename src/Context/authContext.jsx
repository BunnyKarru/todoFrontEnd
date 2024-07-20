import axios from "axios"
import React from "react"
import { useState } from "react"

const authContext = React.createContext()

const AuthProvider = ({children}) =>{

    const [auth,setAuth]=useState(false)

    const checkAuth = async ()=>{
       const result = await axios.post("http://localhost:8000/v1/users/check");
       console.log(result.statusCode);

       if (result.statusCode === 401) {
        setAuth(false)
       } else {
        setAuth(true);
       }
    }

    
 
    return (
        <authContext.Provider value={{auth,setAuth}}>
           {children}
        </authContext.Provider>
    )
}

export default {AuthProvider,authContext};