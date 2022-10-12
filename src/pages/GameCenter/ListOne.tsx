import React,{useState,useEffect} from 'react'
function useLocal(key: any,defaultValue: any) {
  const [msg,setmsg] = useState(defaultValue)
  useEffect(()=>{
    window.localStorage.setItem(key,msg)
    return () =>{
      window.localStorage.removeItem(key)
    }
  },[msg,key])
  return [msg,setmsg]
}
export default function ListOne() {
  const [msg,setmsg] = useLocal('key','354645')
  const acc: any= ()=>{
    setmsg('cp')
    
  }
  return (
    <div onClick={acc}>{msg}</div>
  )
}
