import {createStore} from "redux"

// how to make reducer?

// store 
const store = createStore(reducer);   // rudux is make a store 


// reducer
function reducer (state={amount:1}, action) {    // state ke value aap initialize kar sakte ho, yani de sakte ho
    if(action.type === 'increment'){
        return {amount:state.amount+1}
    }
    return state
}


// global state
console.log(store.getState())   // state ko check karne ke liye ek function hota hai getState()


// add action in redux
store.dispatch({type:'increment'})   // state ke store me value add hogi

console.log(store.getState())



{ amount: 1 }   // this is initial state 
{ amount: 2 }   // fintal state 

