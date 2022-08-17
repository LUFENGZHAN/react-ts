const insd= {
    value:12
}
export const reducer = (state: any=insd,action: any) => { 
    switch (action.type) {
        case 'submit': return {value:state.value+1}
        default :return state

    }
}