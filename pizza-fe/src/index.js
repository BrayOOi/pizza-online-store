import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import UserProvider from "./providers/user/user.provider";
import CartProvider from "./providers/cart/cart.provider";

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <CartProvider>
    <UserProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserProvider>
  </CartProvider>, 
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
