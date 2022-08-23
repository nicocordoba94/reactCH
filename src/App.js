import React, { useEffect } from "react";
import NavBar from "./components/NavBar/NavBar.js";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import CartCustomContext from './components/CartContext';
import Cart from "./components/Cart";


import {getFirestore,collection,getDocs} from 'firebase/firestore'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoA5Rv6QMz2Igql7dnlT_Z-xWsM_0szhg",
  authDomain: "codercurso-react-prueba.firebaseapp.com",
  projectId: "codercurso-react-prueba",
  storageBucket: "codercurso-react-prueba.appspot.com",
  messagingSenderId: "731065917198",
  appId: "1:731065917198:web:5e9d44388fbdbc84e2415f"
};




function App() {
  return (
    <div className="App">
      <CartCustomContext>
            <BrowserRouter>
              <NavBar />
                <Routes>
                  <Route path="/" element={<ItemListContainer />}></Route>
                  <Route 
                        path="/category/:id" 
                        element={<ItemListContainer />}
                  ></Route>
                  <Route 
                        path="/item/:id" 
                        element={<ItemDetailContainer/>}
                  ></Route>
                  <Route path="/cart" element={<Cart />}></Route>
                </Routes>
            </BrowserRouter>
    </CartCustomContext>
    </div>
    );
}

export default App;

/*function App() {

  useEffect(()=>{
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    //Selecciona la base de datos de Firestore
    const db = getFirestore(app);
    //
    const colRef = collection(db,'productos');

    getDocs(colRef).then((snapshot)=>{
      console.log('>> snapshot.docs',snapshot.docs)

      const productosConFormato = snapshot.docs.map((rawDoc) =>{
          return{
            id: rawDoc.id,
            ...rawDoc.data()
          }
      });


    }, (error)=>{
      console.log('>> Error al traer la info')
    });
  },[]);

  return (
    <div className="App">
      <CartCustomContext>
            <BrowserRouter>
              <NavBar />
                <Routes>
                  <Route path="/" element={<ItemListContainer />}></Route>
                  <Route 
                        path="/category/:id" 
                        element={<ItemListContainer />}
                  ></Route>
                  <Route 
                        path="/item/:id" 
                        element={<ItemDetailContainer/>}
                  ></Route>
                </Routes>
            </BrowserRouter>
    </CartCustomContext>
    </div>
    );
}

export default App;*/