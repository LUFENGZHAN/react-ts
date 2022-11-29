import { useEffect, useState } from 'react'
import './index.scss'
import CommCarts from '@/components/Comm/CommCarts'
import { Progress } from 'antd';
 function RightLayout() {
  const [bar,setbar] = useState([])
  const [lner,setlner] = useState([])
  const [pie,setpie] = useState([])
  const [list, setlist] = useState<any[]>([]);

  const api = ()=>{
    window.api.signin.province.list().then((res:any) => {
      setlner(res.data.list)  
    })
    window.api.signin.city.list().then((res:any) => {
      setpie(res.data.list)
      
    })
    window.api.signin.city.listfa().then((res:any) => {
      setbar(res.data.list)
      
    })
    window.api.data.list_more().then((res:any) => {
      setlist(res.data.mapdata)
      
    })
  }
  useEffect(()=>{
    api()
  },[])
  return (
    <div className='bg' style={{right:'0',transform: 'rotateY(180deg)'}}>
      <h2 style={{textAlign:'right',paddingRight:'5px',transform: 'rotateY(180deg)'}}>数据面板</h2>
      <div className='cont' style={{right:'0',transform: 'rotateY(180deg)'}}>
        <div className='cont_1'>
        <p/>
          <CommCarts id= 'pie1' data={chartData(lner,pie).option}/>
        </div>
        <div className='cont_1'>
        <p/>
          <CommCarts id= 'line1' data={chartData(lner,pie).option2}/>
        </div>
        <div className='cont_1'>
          <p/>
          <div style={{overflow: 'hidden'}}>
              <div className='progress'>
                {list.map((v:any,i) =>{
                  return(
                    <div className='props'>
                    <span key={i}>{v.name}</span>
                    <Progress
                    strokeColor={{
                      '0%': '#108ee9',
                      '100%': '#87d068',
                    }}
                    percent={v.wd.toFixed(2)}
                    status="active"
                  />
                  </div>
                  )
                })}
              </div>
          </div>
        </div>
        {/* <div className='cont_1'>
        <p/>
        </div> */}
      </div>
    </div>
  )
}
const chartData = (lner?:any,pie?:any)=>{
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
        name: '饼图',
        type: 'pie',
        radius: [50, 80],
        center: ['60%', '50%'],
        avoidLabelOverlap:false,
        itemStyle: {
          borderRadius: 1
        },
        label:{
          show:false,
          color:'#fff'
        },
        data: pie.map((v:any)=>{
          return{
            ...v,
            name:v.title,
          }
        })
      }
    ]
  }
  let option2 ={
    grid: {
      bottom: 40
    },
    legend: {
      top: "15",
      type: "scroll",
      textStyle: {
          color: "#fff",
          fontSize: 14,
      },
    },
    dataZoom: [
      {
        show: true,
        realtime: true,
        start: 45,
        end: 85,
        height:20,
        bottom:0,
      },
      {
        type: 'inside',
        realtime: true,
        start: 65,
        end: 85
      }
    ],
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        axisLine: { onZero: false },
        // prettier-ignore
        data:lner.map((v:any)=> v.title)
      }
    ],
    yAxis: [
      {
        name: '',
        type: 'value'
      },
      {
        name: '',
        nameLocation: 'start',
        alignTicks: true,
        type: 'value',
        inverse: true
      }
    ],
    series: lner.map((v:any) =>{
      return {
        name: v.title,
        type: 'line',
        showSymbol: false,
        areaStyle: {
          show:true,
          opacity: 0.2,

        },
        lineStyle: {
          width: 0.1
        },
        emphasis: {
          focus: 'series'
        },
        // prettier-ignore
        data: v.list
      }
    })
  }
  return{
    option,
    option2,
  }
}
export default RightLayout