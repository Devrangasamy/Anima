import React, { useContext, useState } from 'react'
const googleContext = React.createContext()

export const GoogleAuthendication = (props) => {
    const [credential, setCredential] = useState('')
    const updateCredential = (name) => {
        setCredential(name)
    }
    const resetCrential = () => {
        setCredential('')
    }
    return(
        <googleContext.Provider value = {{credential, updateCredential, resetCrential}}>
            {props.children}
        </googleContext.Provider>
    )
}

export const useGoogleContext = () => {
    return useContext(googleContext)
}
