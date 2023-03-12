import { Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist/Wishlist";



function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </div>
  );
}

export default App;
