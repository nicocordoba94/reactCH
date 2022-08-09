
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar/NavBar.js";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from "./components/ItemDetailContainer";
import React from "react";



function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={<ItemListContainer />} />
      <Route path='/category/:categoryId' element={<ItemListContainer />} />
      <Route path='/detail/:productId' element={<ItemDetailContainer/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;