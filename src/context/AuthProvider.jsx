import React, { createContext, useEffect, useState } from 'react'
import { getLocalStoarge, setLocalStoarge } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
      // localStorage.clear()
   const [userData, setUserData] = useState({employees: [],}) 
//    const data = getLocalStoarge()
//    console.log(data)

useEffect(() => {
  setLocalStoarge()
  const {employees} = getLocalStoarge()
  setUserData(employees)

}, [])


  return (
    <div>
          <AuthContext.Provider value={[userData,setUserData]}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider