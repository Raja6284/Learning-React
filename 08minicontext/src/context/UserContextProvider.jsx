import React from 'react'
import UserContext from './UserContext'

const UserContectPovider = ({children})=>{
    const [user,setUser] = React.useState(null)
    
    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
        
    )
}


export default UserContectPovider;