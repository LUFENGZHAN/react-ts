import { useState, createContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
export const context = createContext({})
function AppPro({ children }: any) {
    // const to =useNavigate()
    const [islogin, setilogin] = useState(false)
    return (
        <context.Provider value={{ islogin, setilogin }}>
            {children}
        </context.Provider>
    )
}
export default AppPro
