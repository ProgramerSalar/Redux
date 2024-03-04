import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, incrementByAmount } from '../redux/reducers/rewardReducer';

function Rewards() {
  const points = useSelector((state) => state.reward.points)
  const dispatch = useDispatch()

  
  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Bonus Component</b>
        </h4>
        <h3>Total Point : ${points}</h3>

        <button onClick={() => dispatch(increment())}>Increment bonus +</button>
        <button onClick={() => dispatch(incrementByAmount(3))}>Increment By Amount +</button>
      </div>
    </div>
  );
}

export default Rewards;