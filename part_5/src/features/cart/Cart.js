import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsync } from "./cartReducer";

export const Product = () => {
  const dispatch = useDispatch();

  const data  = useSelector(
    (state) => state.product.products // product is store name reducer name and products is  action name
  );
  // console.log(data);
  return (
    <div class="card">
      {
        data.map((product) => (
          <div>
  <img
        src={product.thumbnail}
        alt="Denim Jeans"
        style={{ width: "20%" }}
      />
      <h1>{product.title}</h1>
      <p class="price">${product.price}</p>
      <p>{product.description}</p>
      <p>
        <button onClick={() => dispatch(fetchAsync())}>Add to Cart</button>
      </p>
            </div>
        ))
      }
    
    </div>
  );
};
