import React from "react";
import {useDispatch} from 'react-redux'
import { fetchAsync } from "./productReducer";

export const Product = () => {
  const dispatch = useDispatch()
  return (
    <div class="card">
      <img src="https://cdn.dummyjson.com/product-images/1/thumbnail.jpg" alt="Denim Jeans" style={{width:'20%'}} />
      <h1>Tailored Jeans</h1>
      <p class="price">$19.99</p>
      <p>Some text about the jeans..</p>
      <p>
        <button
        onClick={() => dispatch(fetchAsync())}
        >Add to Cart</button>
      </p>
    </div>
  );
};
