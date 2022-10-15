 const api = { 
    login(data?: any){
        return window.common.request({
            url:`/login`,
            method: 'POST',
            data
        })
    },
    login2(data?: any){
        return window.common.request({
            url:`/login`,
            method: 'POST',
            data
        })
    },
}
export default api;