const api ={
    bool(data?: any){
        return window.common.request({
            url:`/api/data/bool`,
            method: 'get',
            data
        })
    },
    province:{
        list(data?: any){
            return window.common.request({
                url:`/api/data/province/list`,
                method: 'get',
                data
            })
        },
    },
    city:{
        list(data?: any){
            return window.common.request({
                url:`/api/data/city/list`,
                method: 'get',
                data
            })
        },
        listfa(data?: any){
            return window.common.request({
                url:`/api/data/city/listfa`,
                method: 'get',
                data
            })
        },
    }

}
export default api