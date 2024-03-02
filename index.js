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


//Action creator 
function increment(){
    return {type:'increment'}
}
function decrement(){
    return {type:'decrement'}
}
function incrementByAmount(value){
    return {type:'incrementByAmount', payload:value}
}


// add action in redux
setInterval(() => {
    store.dispatch(incrementByAmount(4)) 
},2000)      // time 2 sec delay








