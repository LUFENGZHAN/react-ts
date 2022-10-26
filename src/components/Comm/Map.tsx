import {useEffect} from 'react'
import './CommStyle/index.scss';
export default function Map(data: any) {
    useEffect(() =>{
        AMap(data)
    },[data])
    return (
        <div id="map"></div>
    )
}
const mapip = [
    {
        le:121.55,
        len:29.8
    },
    {
        le:121.52,
        len:29.82
    },
    {
        le:121.554,
        len:29.83
    },
]
function AMap(data?: any){   
    let map: any
    let AMap = window.AMap
    map = new AMap.Map('map', {
        zoom: 17,
        pitch: 49,
        rotation: 10,
        pitchEnable:false,
        showBuildingBlock: true,
        showIndoorMap: true,
        showLabel: false,
        animateEnable: true,
        // 主题
        mapStyle: "amap://styles/blue",
        features: ["bg", "point", "road"],
        viewMode: "3D",
    }); 
    if (data.datae.length != 0) {
        data.datae.forEach((item:any) =>{
            var ellipse = new AMap.Ellipse({
                center: [item.jd, item.wd],
                radius: [ 1000, 1000 ], //半径
                borderWeight: 0,
                strokeColor: "#FF33FF", 
                strokeOpacity: 1,
                strokeWeight: 1,
                fillOpacity: 0.4,
                // 线样式还支持 'dashed'
                strokeStyle: 'dashed',
                strokeDasharray: [20, 10], 
                fillColor: '#1791fc',
                zIndex: 50,
            })
            map.add(ellipse);
        })
    } else{
        mapip.forEach(item =>{
            var ellipse = new AMap.Ellipse({
                center: [item.le, item.len],
                radius: [ 1000, 1000 ], //半径
                borderWeight: 0,
                strokeColor: "#FF33FF", 
                strokeOpacity: 1,
                strokeWeight: 1,
                fillOpacity: 0.4,
                // 线样式还支持 'dashed'
                strokeStyle: 'dashed',
                strokeDasharray: [20, 10], 
                fillColor: '#1791fc',
                zIndex: 50,
            })
            map.add(ellipse);
        })
    }

        
    
    map.setFitView(null, false, [-250, -250, -250, -250]);        
        
}