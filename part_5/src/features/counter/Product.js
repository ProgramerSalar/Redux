import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AddAsync } from "../cart/cartReducer";
import { fetchAsync } from "./productReducer";
export const Product = () => {
  const dispatch = useDispatch();

  const data  = useSelector(
    (state) => state.product.products // product is store name reducer name and products is  action name
  );
  console.log(data);
  useEffect(() => {
    dispatch(fetchAsync())
  },[])

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
        <button onClick={() => dispatch(AddAsync(product))}>Add to Cart</button>
      </p>
            </div>
        ))
      }
    
    </div>
  );
};
