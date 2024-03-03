import { useState } from "react";
import "./App.css";
import Account from "./components/Account";
import Bonus from "./components/Bonus";
import { useSelector } from "react-redux";
function App() {
  const amount = useSelector((state) => state.account.amount);
  const points = useSelector((state) => state.bonus.points)
  const account = useSelector((state) => state.account)
  return (
    <div className="App">
      <h4>App</h4>
{
  account.pending ?                  
   <p>Loading.......</p> :      // if loading is true
    account.error ?              // if loading is not true then error 
    <p>{account.error}</p> :     // if loading false and error false then so the amount
     <h3>Current Amount :{amount} </h3> 
}
     
      <h3>Total Bonus :{points} </h3>


      <Account></Account>
      <Bonus></Bonus>
    </div>
  );
}

export default App;
