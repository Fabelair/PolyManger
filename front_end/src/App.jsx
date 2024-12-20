import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";//npm i -D react-router-dom@latest
import './index.css';
import Footer from './composants/footer';
import Navbar from './composants/navbar';
import Home from './pages/home';
import Ajouter from './pages/ajouter';

function App() {

  return (
    <ul class="select-none dark:bg-gray-900">
      <div class="min-h-100vh flex flex-col">
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Ajouter" element={<Ajouter/>}></Route>
        </Routes>
        </BrowserRouter>
      </div>
      <Footer/>
    </ul>

  )
}

export default App
