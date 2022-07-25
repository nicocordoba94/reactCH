import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/index';
import Form from './components/Form'



function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Header titulo='Escribenos!'></Header>
      <Form></Form>
      
    </div>
  );
}

export default App;
