import {useEffect} from 'react'
import './CommStyle/index.scss';
export default function Map(data: any) {
    useEffect(() =>{
        AMap()
    })
    return (
        <div id="map"></div>
    )
}
function AMap(data?: any){
    let map: any
    let AMap = window.AMap
    map = new AMap.Map('map', {
        zoom: 16,
        pitch: 44,
        rotation: 10,
        showBuildingBlock: true,
        showIndoorMap: true,
        showLabel: false,
        animateEnable: true,
        // 主题
        mapStyle: "amap://styles/blue",
        features: ["bg", "point", "road"],
        viewMode: "3D",
    });
    var ellipse = new AMap.Ellipse({
        center: [121.55, 29.87],
        radius: [ 500, 500 ], //半径
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
    map.setFitView(null, false, [100, 60, 100, 60]);        
        
}