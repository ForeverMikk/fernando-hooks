import { useState } from "react"
import { UserContext } from "./UserContext"

// const user = {
//     id: '123',
//     name: 'Michael',
//     email: 'correo@gmail.com'
// }


export const UserProvider = ({ children }) => {

    const [user, setUser] = useState()
  return (
    // Cualquier hijo de este Provider puede acceder a las propiedades del value
   <UserContext.Provider value={{user, setUser}}> 
    {children}
   </UserContext.Provider>
  )
}
