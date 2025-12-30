import React from "react";
import Navbar from "../pages/home/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/home";

export default function AppRouter() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<Abou/>} /> */}
      </Routes>
    </>
  );
}
