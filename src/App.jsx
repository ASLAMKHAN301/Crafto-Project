import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Components/Home";
import { Contact } from "./Components/Contact";
import Footer from "./Components/Footer";


export default function HeroSection() {

  return (
    <>  
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>

    </>
  );
}
