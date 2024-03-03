export const state = { account: { amount: 1 }, bonus: { points: 2 } };
// export const newState = {
//   account: { amount: state.account.amount },
//   bonus: { points: state.bonus.points + 1 },
// };

// same code use the spreed operator 
export const newState = {
    account: {...state.account},
    bonus: { points: state.bonus.points + 1 },
  };

console.log("State",state, "newState",newState)
state.account.amount=100
console.log("State",state, "newState",newState)
