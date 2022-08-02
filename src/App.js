import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
//import Header from './components/Header/index';
//import Form from './components/Form'
import ItemListContainer from './components/Container/ItemListContainer';



function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemListContainer></ItemListContainer>
    </div>
  );
}

export default App;
