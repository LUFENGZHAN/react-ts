import {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import NavTop from '@/components/navigation/NavTop'
import  style  from './scss/Visualization.module.scss'
import Map from '@/components/Comm/Map'
import RightLayout from './Visualization/RightLayout'
import LeftLayout from './Visualization/LeftLayout'
function Visualization(e: any) {
  const [dataMap,setdataMap] = useState([])
    useEffect(() =>{
      window.api.data.list_more().then((res: any) => {
        setdataMap(res.data.mapdata)
       })
    },[])
   
    return (
      <div className={style.container}>
        <NavTop/>
        <LeftLayout/>
        <RightLayout/>
        <Map datae={dataMap}/>
      </div>
    )
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
