import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAsync, fetchAsync } from "./cartReducer";

export const Cart = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cart.items);
  // console.log(data);

  

  return (
    <div class="card">
      {data.map((item) => (
        <div>
          <img src={item.thumbnail}  style={{ width: "20%" }} />
          <h1>{item.title}</h1>
          <p class="price">${item.price}</p>
          <p></p>
          <p>
            <button onClick={() => dispatch(deleteAsync(item.id))}>Delete Item</button>
          </p>
        </div>
      ))}
    </div>
  );
};
