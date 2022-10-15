import {useEffect} from 'react'
import * as echarts from 'echarts';
export default function CommCarts(data: any) {
   
    useEffect(() =>{
        let myChart= echarts.init(document.getElementById(data.id) as any);
            myChart.setOption(data.data) 
    },[data])
  return (
    <div id={data.id} style={{height:'100%',width:'100%'}}/>
  )
}


