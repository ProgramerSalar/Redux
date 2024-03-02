import {createStore} from "redux"

// how to make reducer?

const history = []

// store 
const store = createStore(reducer);   // rudux is make a store 



// reducer
function reducer (state={amount:1}, action) {    
    if(action.type === 'increment'){
        return {amount:state.amount+1}

        // imutability the output 
        // state.amount = state.amount + 1
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
    store.dispatch({type:'increment'})   
},2000)      // time 2 sec delay








