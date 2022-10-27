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
                    .splice(0, 10)
            );
        });
        window.api.data.list_region().then((res: any) => {
            setpie(
                res.data.list
                    .filter((v: any,i:number,arr:any) => {
                        return v.title !== "-" && arr.indexOf(v) == i
                    })
                    .splice(0, 15)
            );
        });
        window.api.signin.bool().then((res: any) => {
            console.log(res.data);

            // setlner(res.data.list.filter((v:any) => {return v.title !== '-'}))
        });
    }, []);
    useEffect(() => {});
    return (
        <div className="bg" style={{left: "0"}}>
            <h2>数据面板</h2>
            <div className="cont">
                <div className="cont_1">
                    <p></p>
                    <CommCarts id="pie" data={chartData(lner, bar, pie).option} />
                </div>
                <div className="cont_1">
                    <p></p>
                    <CommCarts id="lner" data={chartData(lner, bar, pie).option2} />
                </div>
                <div className="cont_1">
                    <p></p>
                    <CommCarts id="bar" data={chartData(lner, bar, pie).option3} />
                </div>
                <div className="cont_1"></div>
            </div>
        </div>
    );
}
const chartData = (lner?: any, bar?: any, pie?: any) => {
  console.log(pie);
  
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
            left: "0%",
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
                // interval:0,
                textStyle: {
                    color: "#fff",
                },
            },
            data: bar.map((v: any) => {
                return v.title;
            }),
        },
        series: bar.map((v: any) => {
            return {
                name: v.title,
                type: "bar",
                stack: "total",
                label: {
                    show: true,
                    textStyle: {
                        fontSize: 8,
                        color: "#000",
                    },
                },
                emphasis: {
                    focus: "series",
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
            left: "3%",
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
                    show: true,
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
