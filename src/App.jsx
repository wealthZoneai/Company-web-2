import React, { useState } from "react";
import AppRouter from "./Router/appRouter";
import Navbar from "./pages/home/Navbar";
import { Route, Routes } from "react-router-dom";
import Hero from "./pages/home/Hero";
import Home from "./pages/home/home";



function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      
    </>
  );
}

export default App;
