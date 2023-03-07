import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css';
import Home from './Pages/Home';
import Addedit from './Pages/Addedit';
import Header from './Components/Header';
function App() {
  return (
    <>
   
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route  path="/add" element={<Addedit/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
