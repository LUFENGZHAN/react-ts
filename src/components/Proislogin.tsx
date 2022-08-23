import React,{useContext} from 'react'
import { Navigate } from 'react-router-dom'
import {context} from './AppPro'
export default function Proislogin({children}:any) {
const {islogin} = useContext<any>(context)
    if (islogin) return children
    return <Navigate to='/login' replace={true}/>
}
