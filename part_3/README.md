# we are learning redux toolkit 

1. use the create reducer:
https://redux-toolkit.js.org/api/createReducer



* const incrementByAmount = createAction('account/incrementByAmount')  // this action are found in bonus reducer


*   account/incrementByAmount: (state, action) => {
      state.amount += action.payload
    },

    // this action are found in account reducer 


* if action are same in both reducer, then condition are also work 
like this condition: 
 extraReducers:(builder) => {
    builder.addCase(incrementByAmount, (state, action) => {
      if(action.payload >= 100){
        state.points+=1
      }
      
      
    })

// in this condition: action are match the account/incrementByAmount, if payload increase above of 100 then increase the points 
 