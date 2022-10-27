import { useEffect, useState } from 'react'
import './index.scss'
import CommCarts from '@/components/Comm/CommCarts'

export default function RightLayout() {
  const [bar,setbar] = useState([])
  const [lner,setlner] = useState([])
  const [pie,setpie] = useState([])
  useEffect(()=>{
    chartData()
  })
  return (
    
    <div className='bg' style={{right:'0',transform: 'rotateY(180deg)'}}>
      <h2 style={{textAlign:'right',paddingRight:'5px',transform: 'rotateY(180deg)'}}>数据面板</h2>
      <div className='cont' style={{right:'0',transform: 'rotateY(180deg)'}}>
        <div className='cont_1'>
        <p></p>
          <CommCarts id= 'pie1' data={chartData().option}/>
        </div>
        <div className='cont_1'>
        <p></p>
          <CommCarts id= 'line1' data={chartData().option2}/>
        </div>
        <div className='cont_1'>
          <p></p>
        <CommCarts id= 'bar1' data={chartData().option3}/>

        </div>
        <div className='cont_1'>
        <p></p>
        </div>
      </div>
    </div>
  )
}
const chartData = (bar?:any,lner?:any,pie?:any)=>{
  let option ={
    legend: {
      type:'scroll',
      width:'200px',
      orient: 'vertical',
      left: '15',
      formatter:(e:any)=>{
        return e.substring(0,6)
      },
      textStyle:{
        color:'#fff',
        fontSize:14,
      }
    },
    tooltip: {
      trigger: 'item',
      textStyle:{
        color:'#000'
      }
      
    },
    series: [
      {
        name: 'Nightingale Chart',
        type: 'pie',
        radius: [10, 80],
        center: ['60%', '50%'],
        roseType: 'area',
        avoidLabelOverlap:false,
        itemStyle: {
          borderRadius: 1
        },
        label:{
          show:false,
          color:'#fff'
        },
        data: [
          { value: 40, name: 'rose 1' },
          { value: 38, name: 'rose 2' },
          { value: 32, name: 'rose 3' },
          { value: 30, name: 'rose 4' },
          { value: 28, name: 'rose 5' },
          { value: 26, name: 'rose 6' },
          { value: 22, name: 'rose 7' },
          { value: 18, name: 'rose 8' }
        ]
      }
    ]
  }
  let option2 ={

  }
  let option3 ={

  }
  return{
    option,
    option2,
    option3,
  }
}
