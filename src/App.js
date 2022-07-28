import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/index';
import Form from './components/Form'
import ItemListContainer from './components/NavBar/ItemListContainer';



function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemListContainer nombre={'Notebook Gamer'} descripcion={'i7, con 16gb RAM y 3080ti'}></ItemListContainer>
      <Header titulo='Escribenos!'></Header>
      <Form></Form>
      
    </div>
  );
}

export default App;
