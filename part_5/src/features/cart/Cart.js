import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAsync, fetchAsync, updateAsync } from "./cartReducer";

export const Cart = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cart.items);
  // console.log(data);

  const handlerChange = (e, id) => {
    // console.log(e.target.value)
    dispatch(updateAsync({id, change:{quantity:+e.target.value}}))

  }

  

  return (
    <div class="card">
      {data.map((item) => (
        <div>
          <img src={item.thumbnail}  style={{ width: "20%" }} />
          <h1>{item.title}</h1>
          <p class="price">${item.price}</p>
          <div className="quantity">
          Quantity
          <select value={item.quantity} onChange={(e) => handlerChange(e, item.id)} >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>
        </div>
          <p>
            <button onClick={() => dispatch(deleteAsync(item.id))}>Delete Item</button>
          </p>
        </div>
      ))}
    </div>
  );
};
