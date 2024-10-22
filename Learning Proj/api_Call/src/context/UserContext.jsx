import React, { createContext } from 'react'

export const DataContext= createContext();

const UserContext = ({children}) => {

  // const username= "user7";
    const userDetails = {
        name: "user07",
        age:7,
        loc:"BHP"
    }
  return (
    
    <DataContext.Provider value={userDetails}>
      {children}
    </DataContext.Provider>
  )
}

export default UserContext