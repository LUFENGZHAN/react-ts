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
        zoom: 17,
        pitch: 50,
        rotation: 10,
        showBuildingBlock: true,
        showIndoorMap: true,
        showLabel: true,
        animateEnable: true,
        // 主题
        mapStyle: "amap://styles/blue",
        features: ["bg", "point", "road"],
        viewMode: "3D",
    });
        
}