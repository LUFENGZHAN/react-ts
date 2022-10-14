const insd= {
    value:0
}
export const reducer = (state: any=insd,action: any) => {  
    switch (action.type) {
        case 'add': return {value:state.value+1}
        default :return state

    }
}