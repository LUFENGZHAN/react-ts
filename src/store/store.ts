import {createStore} from 'redux'
import {reducer} from './reducer'

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
export default ReducerStore
export const store = createStore(reducer)