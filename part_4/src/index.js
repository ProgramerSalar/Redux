import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import accountSlices from './redux/slices/accountSlices';
import {Provider} from "react-redux"
import bonusSlices from './redux/slices/bonusSlices';
import rewardReducer from './redux/reducers/rewardReducer';
import { adminApi } from './redux/api/AdminSlice';


const store = configureStore({
  reducer:{
    account:accountSlices,
    bonus:bonusSlices,
    reward:rewardReducer, 
    // reducerPath is key if you are not used the square brack when that is string not calculate the value, so given the square bracket
    [adminApi.reducerPath] : adminApi.reducer   // adminApi is a function but this is reducer 
  },
  middleware: (getDefaultMiddleware) =>   // getDefaultMiddleware means jitene existing middleware hai found in this middleware
    getDefaultMiddleware().concat(adminApi.middleware),  // adminApi middleware ko add kar do
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />

    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
