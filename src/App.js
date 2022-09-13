import React from "react";
import NavBar from "./components/NavBar/NavBar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import CartCustomContext from "./components/CartContext";
import Cart from "./components/Cart";


function App() {
  return (
    <div className="App">
      <CartCustomContext>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />}></Route>
            <Route path="/category/:id" element={<ItemListContainer />}></Route>
            <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </BrowserRouter>
      </CartCustomContext>
    </div>
  );
}

export default App;