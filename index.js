import {createStore} from "redux"

// how to make reducer?

// store 
const store = createStore(reducer);   // rudux is make a store 


// reducer
function reducer (state={amount:1}, action) {    // state ke value aap initialize kar sakte ho, yani de sakte ho
    if(action.type === 'increment'){
        return {amount:state.amount+1}

        // imutability the output 
        // state.amount = state.amount + 1
    }
    return state
}



// global state // this is subscribe function update the every time of store?
store.subscribe(() => {   
    console.log(store.getState())
})





// add action in redux
store.dispatch({type:'increment'})   // state ke store me value add hogi







