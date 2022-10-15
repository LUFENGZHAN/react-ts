/* eslint-disable import/no-anonymous-default-export */

export default { 
    login(data?: any){
        return window.common.request({
            url:`/login`,
            method: 'POST',
            data
        })
    },

}