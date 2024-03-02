import {createStore, applyMiddleware} from "redux"
import logger from "redux-logger";

// how to make reducer?

const history = []

// store 
const store = createStore(reducer, 
    applyMiddleware(logger.default)   // add the middleware 
    );   



// reducer
function reducer (state={amount:1}, action) {    
    if(action.type === 'increment'){
        return {amount:state.amount+1}
    }
    if(action.type === 'decrement'){
        return {amount:state.amount-1}
    }
    if(action.type === 'incrementByAmount'){
        return {amount:state.amount + action.payload}
    }

    return state
}



// global state // this is subscribe function update the every time of store?
store.subscribe(() => {   
    history.push(store.getState())
    console.log(history)
})





// add action in redux
setInterval(() => {
    store.dispatch({type:'incrementByAmount', payload:4})   
},2000)      // time 2 sec delay








