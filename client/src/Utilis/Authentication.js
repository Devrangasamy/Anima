import React, { useContext, useState } from 'react'
const AuthContext = React.createContext()

export const Authentication = (props) => {
  const[user, setUser] = useState("")
  const login = (name) => {
    setUser(name)
  }
  const logout = () => {
    setUser('')
  }
  return (
    <AuthContext.Provider value = {{user, login, logout}}>
      {props.children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}