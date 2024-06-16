import React,{ createContext, useContext, useState } from "react";

const LogginContext = createContext();

const LogginProvider =({children})=>{
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [profile,setProfile] = useState({})
  return (<LogginContext.Provider value={{isLoggedIn,setIsLoggedIn, profile,setProfile }}>
      {children}
    </LogginContext.Provider>
  )

}

export const useLoggin =()=>useContext(LogginContext)

export default LogginProvider;
