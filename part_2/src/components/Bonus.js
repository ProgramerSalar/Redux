import { useState } from "react";
import {incrementBonus} from "../actions"
import { useDispatch, useSelector } from "react-redux";

function Bonus() {
  // const [points, setPoints] = useState({ value: 0 });
  const points = useSelector((state) => state.bonus.points)
  const dispatch = useDispatch()
  // const incrementBonus = () => {
  //   setPoints({ value: points.value + 1 });
  // };

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Bonus Component</b>
        </h4>
        <h3>Total Point : ${points}</h3>

        <button onClick={() => dispatch(incrementBonus())}>Increment +</button>
      </div>
    </div>
  );
}

export default Bonus;