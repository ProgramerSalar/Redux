import {createStore} from "redux"

// how to make reducer?

// store 
const store = createStore(reducer);   // rudux is make a store 


// reducer
function reducer (state={amount:1}, action) {    // state ke value aap initialize kar sakte ho, yani de sakte ho
    
    return state
}


// global state
console.log(store.getState())   // state ko check karne ke liye ek function hota hai getState()


