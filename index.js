import axios from "axios";
import {createStore, applyMiddleware, combineReducers} from "redux"
import logger from "redux-logger";
import  {thunk}  from 'redux-thunk';
// import * as thunk from 'redux-thunk';
// import {state, newState} from "./test.js"

// how to make reducer?



// action name constant 


// handle function action 
const getAccUserPending = 'account/getUser/pending';
const getAccUserFulFilled = 'account/getUser/fulfilled';
const getAccUserRejected = 'account/getUser/rejected'


// store 
const store = createStore(
    combineReducers({
        account:accountReducer
        // bonus:bonusReducer
    }), 
    applyMiddleware(logger.default, thunk),
    
    );   



// reducer
function accountReducer (state={amount:1}, action) {    

    switch(action.type){

        case getAccUserFulFilled:
            return {amount: action.payload,  pending:false}

        case getAccUserRejected:
            return {...state, error:action.error, pending:false}

        case getAccUserPending:
            return {...state, pending:true}


        

        default:
            return state

        
    }
  

    
}






//Action creator 

function initUser(id){
    return async(dispatch, getState) => {
        try{
            dispatch(getAccountUserPending())
            const {data} = await axios.get(`http://localhost:3000/account/${id}`)
            dispatch(getAccountUserFulFilled(data.amount))
        }catch(error){
            dispatch(getAccountUserRejected(error))
        }
       
    }
    
}


function getAccountUserFulFilled(value){
    return {type: getAccUserFulFilled, payload:value}
}

function getAccountUserRejected(error){
    return {type:getAccUserRejected, error:error}

}

function getAccountUserPending(){
    return {type:getAccUserPending}
}




// add action in redux
setTimeout(() => {
    store.dispatch(initUser(1))
},2000)      // time 2 sec delay







