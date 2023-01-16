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
    var infoWindow:any;
    let map: any
    let ellipse:any
    let marker:any
    let AMap = window.AMap
    map = new AMap.Map('map', {
        zoom: 17,
        pitch: 49,
        rotation: 10,
        resizeEnable: true,
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
            ellipse = new AMap.Ellipse({
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
            marker = new AMap.Marker({
                map: map,
                icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
                position: [item.jd, item.wd],
            });
            marker.on('click',openInfo)
            map.add(ellipse);
        })
    } else{
        mapip.forEach(item =>{
            ellipse = new AMap.Ellipse({
                center: [item.le, item.len],
                radius: [ 100, 100 ], //半径
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
            marker = new AMap.Marker({
                map: map,
                icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
                position: [item.le, item.len],
            });
            map.add(ellipse);
            marker.on('click',openInfo)
        })
    }
    function openInfo() {
        //构建信息窗体中显示的内容
        var info = [];
        info.push("<div><div><img style=\"float:left;\" src=\" https://webapi.amap.com/images/autonavi.png \"/></div> ");
        info.push("<div style=\"padding:0px 0px 0px 4px;\"><b>高德软件</b>");
        info.push("电话 : 010-84107000   邮编 : 100102");
        info.push("地址 :北京市朝阳区望京阜荣街10号首开广场4层</div></div>");
        infoWindow = new AMap.InfoWindow({
            content: info.join("<br/>")  //使用默认信息窗体框样式，显示信息内容
        });
        infoWindow.open(map, map.getCenter());

    }
    function closeInfo() {
        infoWindow.close();
    }   
    map.setFitView(null, false, [-150, -150, -250, -250]);              
}