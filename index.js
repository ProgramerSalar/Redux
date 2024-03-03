import axios from "axios";
import {createStore, applyMiddleware} from "redux"
import logger from "redux-logger";
import  {thunk}  from 'redux-thunk';
// import * as thunk from 'redux-thunk';
import {state, newState} from "./test.js"

// how to make reducer?

const history = []


// action name constant 
const increment = 'increment'
const decrement = 'decrement'
const incrementByAmount = 'incrementByAmount'
const init = 'init'

// store 
const store = createStore(reducer, 
    applyMiddleware(logger.default, thunk),
    
    );   



// reducer
function reducer (state={amount:1}, action) {    

    switch(action.type){

        case init:
            return {amount: action.payload}


        case increment:
            return {amount:state.amount+1}

        case decrement:
            return {amount:state.amount-1}

        case incrementByAmount:
            return {amount:state.amount + action.payload}

        default:
            return state

        
    }
  

    
}



// global state // this is subscribe function update the every time of store?
// store.subscribe(() => {   
//     history.push(store.getState())
//     console.log(history)
// })




//Action creator 

function initUser(id){
    return async(dispatch, getState) => {
        const {data} = await axios.get(`http://localhost:3000/account/${id}`)
        dispatch({type:init, payload:data.amount})
    }
    
}

// function incr(){
//     return {type:increment}
// }
// function decr(){
//     return {type:decrement}
// }
// function incrByAmount(value){
//     return {type:incrementByAmount, payload:value}
// }


// add action in redux
setTimeout(() => {
    store.dispatch(initUser(2)) 
},2000)      // time 2 sec delay







