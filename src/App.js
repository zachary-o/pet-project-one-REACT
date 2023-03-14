import { Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist/Wishlist";
import Cart from "./pages/Сart/Cart";



function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
