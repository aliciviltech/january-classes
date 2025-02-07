import React, { createContext } from 'react'

export const UserContextValue = createContext();

const UserContext = ({children}) => {
  return (
    <UserContextValue.Provider value={'abc'}>
        {children}
    </UserContextValue.Provider>
  )
}

export default UserContext