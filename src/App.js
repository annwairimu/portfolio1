
import React from "react";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contacts/Contact";
import Portfolio from "./pages/portfolio/Portfolio";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="portfolio" element={<Portfolio/>}/>
      <Route path="contact" element={<Contact/>}/>

    </Routes>
    </>
  );
}

export default App;
