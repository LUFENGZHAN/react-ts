import {useEffect} from 'react'
import {connect} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import NavTop from '../components/navigation/NavTop'
import  style  from './scss/Visualization.module.scss'
import Map from '../components/Comm/Map'
function apiList (){      
 window.api.user.login({username:'admin', password:"123456"})
}
function Visualization(e: any) {
    const to = useNavigate()
    useEffect(() =>{
      apiList()
      chartData()
    },[])
   
    return (
      <div className={style.container}>
        <NavTop/>
        {/* <div onClick={() =>to('/home')}>echarts</div> */}
        <Map/>
      </div>
    )
}
// echarts
const chartData = ()=>{

}
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
