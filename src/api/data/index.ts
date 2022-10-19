const api =  {
    listcountyfa(data?: any){
        return window.common.request({
            url:`/api/signin/listcountyfa`,
            method: 'get',
            data
        })
    },
    list_more(data?: any){
        return window.common.request({
            url:`/api/signin/list_more`,
            method: 'get',
            data
        })
    },
    list_demo(data?: any){
        return window.common.request({
            url:`/api/signin/list_demo`,
            method: 'get',
            data
        })
    },
    list_region(data?: any){
        return window.common.request({
            url:`/api/signin/list_region`,
            method: 'get',
            data
        })
    },
    listcounty(data?: any){
        return window.common.request({
            url:`/api/signin/listcounty`,
            method: 'get',
            data
        })
    },
}
export default api