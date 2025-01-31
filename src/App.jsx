import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Skill />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
