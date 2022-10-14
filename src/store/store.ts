import {createStore} from 'redux'
import {reducer} from './reducer'
const store = createStore(reducer)
class ReducerStore {
    count = 0
    constructor(a: any){
        this.count = a
        
    }
    // class 计算方法 get
    get add(){
        return this.count
    }
    
}
export {
    ReducerStore,
    store
}