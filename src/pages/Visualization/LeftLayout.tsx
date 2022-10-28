import {useEffect, useState} from "react";
import "./index.scss";
import CommCarts from "@/components/Comm/CommCarts";
function LeftLayout() {
    const [bar, setbar] = useState<any[]>([]);
    const [lner, setlner] = useState<any[]>([]);
    const [pie, setpie] = useState<any[]>([]);
    const [list, setlist] = useState<any[]>([]);
    useEffect(() => {
        window.api.data.listcounty().then((res: any) => {
            setlner(res.data.list);
        });
        window.api.data.listcountyfa().then((res: any) => {
            setbar(
                res.data.list
                    .filter((v: any) => {
                        return v.title !== "-";
                    })
            );
        });
        window.api.data.list_region().then((res: any) => {
            setpie(
                res.data.list
                    .filter((v: any,i:number,arr:any) => {
                        return v.title !== "-" && arr.indexOf(v) === i
                    })
            );
        });
        window.api.signin.bool().then((res: any) => {
            setlist(res.data.list.filter((v:any) => {return v.title !== '-'}))
        });
    }, []);
    useEffect(() => {});
    return (
        <div className="bg" style={{left: "0"}}>
            <h2>数据面板</h2>
            <div className="cont">
                <div className="cont_1">
                    <p/>
                    <CommCarts id="pie" data={chartData(lner, bar, pie).option} />
                </div>
                <div className="cont_1">
                    <p/>
                    <CommCarts id="lner" data={chartData(lner, bar, pie).option2} />
                </div>
                <div className="cont_1">
                    <p/>
                    <CommCarts id="bar" data={chartData(lner, bar, pie).option3} />
                </div>
                {/* <div className="cont_1">
                  <p/>
                    <div>

                    </div>
                </div> */}
            </div>
        </div>
    );
}
const chartData = (lner?: any, bar?: any, pie?: any) => { 
    let option = {
        legend: {
            type: "scroll",
            width: "200px",
            orient: "vertical",
            left: "15",
            formatter: (e: any) => {
                return e.substring(0, 3);
            },
            textStyle: {
                color: "#fff",
                fontSize: 14,
            },
        },
        tooltip: {
            trigger: "item",
            textStyle: {
                color: "#000",
            },
        },
        series: [
            {
                name: "图表",
                type: "pie",
                radius: [10, 80],
                center: ["60%", "50%"],
                roseType: "area",
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 1,
                },
                label: {
                    show: false,
                    color: "#fff",
                },
                data: lner.map((v: any) => {
                    return {
                        ...v,
                        name: v.title || v.name,
                    };
                }),
            },
        ],
    };

    let option2 = {
        legend: {
            top: "15",
            type: "scroll",
            textStyle: {
                color: "#fff",
                fontSize: 14,
            },
        },
        grid: {
            left: "2%",
            right: "8%",
            bottom: "0%",
            containLabel: true,
        },
        xAxis: {
            type: "value",
            axisTick: {
                show: false,
            },
            axisLabel: {
                formatter: (e: any) => {
                    if (e >= 1000) {
                        return `${(e / 1000).toFixed()} k`;
                    }
                    return e;
                },
            },
            splitLine: {
                show: false,
            },
        },
        yAxis: {
            orient: "time",
            type: "category",
            axisLabel: {
                interval:0,
                textStyle: {
                    color: "#fff",
                },
            },
            data: bar.map((v: any) => {
                return v.title;
            }),
        },
        dataZoom: [
            {
              show: false,
              start: 0,
              end: 40
            },
            {
              type: 'inside',
              start: 94,
              end: 100
            },
            {
              show: true,
              yAxisIndex: 0,
              start: 0,
              end: 50,
              filterMode: 'empty',
              width: 20,
              height: '80%',
              showDataShadow: false,
              left: '93%'
            }
          ],
        series: bar.map((v: any) => {
            return {
                name: v.title,
                type: "bar",
                stack: "total",
                label: {
                    show: false,
                    textStyle: {
                        fontSize: 18,
                        color: "#fff",
                    },
                },
                emphasis: {
                    focus: "series",
                    textStyle: {
                        fontSize: 18,
                        color: "#fff",
                    },
                },
                data: v.list.map((item: any) => {
                    return item.value;
                }),
            };
        }),
    };
    let option3 = {
        legend: {
            top: "15",
            type: "scroll",
            textStyle: {
                color: "#fff",
                fontSize: 14,
            },
        },
        grid: {
            left: "10%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
        },
        xAxis: [
            {
                type: "category",
                boundaryGap: false,
                data: pie.map((v: any) => {
                    return v.title;
                }),
                axisLabel: {
                    interval:0,
                    textStyle: {
                        color: "#fff",
                    },
                },
            },
        ],
        yAxis: [
            {
                type: "value",
                splitLine: {
                    show: false,
                },
                axisLabel: {
                    formatter: (e: any) => {
                        if (e >= 1000) {
                            return `${(e / 1000).toFixed()} k`;
                        }
                        return e;
                    },
                },
            },
        ],
        dataZoom: [
            {
              show: true,
              start: 0,
              end: 40,
              height:20,
              width: 50,
              left: '0%',
              bottom:1,

            },
            {
              type: 'inside',
              start: 94,
              end: 100
            },
            {
              show: false,
              yAxisIndex: 0,
              filterMode: 'empty',
              width: 20,
              height: '20%',
              showDataShadow: true,
              left: '0%'
            }
          ],
        series: pie.map((v: any) => {
            return {
                name: v.title,
                type: "line",
                stack: "Total",
                smooth: true,
                lineStyle: {
                    width: 0,
                },
                label: {
                    show: false,
                    textStyle: {
                        fontSize: 8,
                        color: "#000",
                    },
                },
                showSymbol: false,
                areaStyle: {
                    opacity: 0.5,
                },
                emphasis: {
                    focus: "series",
                },
                data: v.list,
            };
        }),
    };
    return {
        option,
        option2,
        option3,
    };
};
export default LeftLayout;
