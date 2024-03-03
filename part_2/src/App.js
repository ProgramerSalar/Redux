import { useState } from 'react';
import './App.css';
import Account from './components/Account';
import Bonus from './components/Bonus';
function App({store}) {
  const [account, setAccount] = useState({ amount: 0 });

  const [points, setPoints] = useState({ value: 0 });

  const incrementBonus = () => {
    setPoints({ value: points.value + 1 });
  };

  const increment = () => {
    setAccount({ amount: account.amount + 1 });
  };

  const decrement = () => {
    setAccount({ amount: account.amount - 1 });
  };

  const incrementByAmount = (value) => {
    setAccount({ amount: account.amount + value });
  };

  return (
    <div className="App">
      <h4>App</h4>
      <h3>Current Amount :{store.getState().account.amount} </h3>
      <h3>Total Bonus :{store.getState().bonus.points} </h3>

      <Account
      increment={increment}
      decrement={decrement}
      incrementByAmount={incrementByAmount}
      account={account}
      ></Account>
      <Bonus 
      // incrementBonus={incrementBonus}
      // points={points}
      store={store}
      ></Bonus>
    </div>
  );
}

export default App;