import {useEffect} from 'react'
import {connect} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import  style  from './scss/Visualization.module.scss'
function apiList (){      
 window.api.user.login({username:'admin', password:"123456"})
}
function Visualization(e: any) {
    const to = useNavigate()
    useEffect(() =>{
      apiList()
    },[])
   
    return (
      <div className={style.container}>
        <div onClick={() =>to('/home')}>echarts</div>
      </div>
    )
}
// echarts

// 全局状态
const value = (e: any) =>{
  return e
}
const setState = (sendAction: any) => {  
  return{
    sendActions:() =>{
      sendAction({type:'add'})
    }
  }

}


export default connect(value,setState)(Visualization)
