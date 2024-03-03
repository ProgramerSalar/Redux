import axios from "axios";
import {createStore, applyMiddleware, combineReducers} from "redux"
import logger from "redux-logger";
import  {thunk}  from 'redux-thunk';
// import * as thunk from 'redux-thunk';
// import {state, newState} from "./test.js"

// how to make reducer?



// action name constant 
const increment = 'increment'
const decrement = 'decrement'
const incrementByAmount = 'incrementByAmount'
const init = 'init'

// store 
const store = createStore(
    combineReducers({
        account:accountReducer,
        bonus:bonusReducer
    }), 
    applyMiddleware(logger.default, thunk),
    
    );   



// reducer
function accountReducer (state={amount:1}, action) {    

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

function bonusReducer (state = {points: 0}, action){

    switch(action.type){
        case incrementByAmount:
            if(action.payload >= 100)
                return {points: state.points + 1}
            
        default:
            return state
    }
}







//Action creator 

function initUser(id){
    return async(dispatch, getState) => {
        const {data} = await axios.get(`http://localhost:3000/account/${id}`)
        dispatch({type:init, payload:data.amount})
    }
    
}

function incr(){
    return {type:increment}
}
function decr(){
    return {type:decrement}
}
function incrByAmount(value){
    return {type:incrementByAmount, payload:value}
}


// add action in redux
setTimeout(() => {
    // store.dispatch(initUser(2)) 
    // store.dispatch(incr())
    store.dispatch(incrByAmount(200))
},2000)      // time 2 sec delay







