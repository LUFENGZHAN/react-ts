import {useEffect} from 'react'
import {connect} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Recharts from '../components/REcharts'
import  style  from './scss/Visualization.module.scss'
import  api  from '../service/request'
function apiList (){      
  api.get('/data').then(res =>{
    console.log(res);
    
  })
}
let list3 = [1,3,1,2,3,5,5]
function Visualization(e: any) {
    const to = useNavigate()
    useEffect(() =>{
      apiList()
      optionNew()
      
    },[])
    const add = ()=>{
      e.sendActions()
      list3=[32,19,82,93,65,45]
    }
   
    return (
      <div className={style.container}>
        <h1 onClick={add}>+</h1>
        <h2>{e.value}</h2>
        <div style={{width:'200px',height:'200px'}}>
        <Recharts id='a' data={optionNew().option}></Recharts>
        </div>
        <div onClick={() =>to('/home')}>echarts</div>
        <div style={{width:'300px',height:'200px'}}>
        <Recharts id='b' data={optionNew().option2}></Recharts>
        </div>
      </div>
    )
}
// echarts
function optionNew(){
  let option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: list3,
        type: 'bar'
      }
    ]
  }
  let option2 = {
    title: {
      text: 'Referer of a Website',
      subtext: 'Fake Data',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '20%',
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
  return {
    option,option2
  }
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
