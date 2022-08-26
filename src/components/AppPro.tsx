import { useState, createContext } from 'react'
export const context = createContext({})
function AppPro({ children }: any) {
    const [islogin, setilogin] = useState(false)
    return (
        <context.Provider value={{ islogin, setilogin }}>
            {children}
        </context.Provider>
    )
}
export default AppPro
