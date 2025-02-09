import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";//npm i -D react-router-dom@latest
import './index.css';
import Footer from './composants/footer';
import Navbar from './composants/navbar';
import Home from './pages/home';
import Ajouter from './pages/ajouter';
import Connect from './pages/connect';
import { useState } from "react";
import { getConnectionId } from './functions/gestionDeConnection';

export function App() {
  const [idConnection, setIdConnection] = useState();
  useEffect(()=>{
    const id = getConnectionId()
    setIdConnection(id)
  })
  return (
    <ul class="select-none dark:bg-gray-900">
      <div class="min-h-100vh flex flex-col">
        <Router>
        <Navbar id={idConnection}/>
        <Routes>
            <Route path="/Ajouter" element={<Ajouter/>}></Route>
            <Route path="/connect" element={<Connect id={idConnection}/>}></Route>
            <Route path="/" element={<Home/>}></Route>
        </Routes>
        </Router>
      </div>
      <Footer/>
    </ul>

  )
}

export default App
