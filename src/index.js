import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import App from './App';

import { WishlistProvider } from "./context/WishlistContext";



import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <WishlistProvider>
      <App />
    </WishlistProvider>
  </BrowserRouter>
);
