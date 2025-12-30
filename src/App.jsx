import React, { useState } from "react";
import AppRouter from "./Router/appRouter";
import Navbar from "./pages/home/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<Abou/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
