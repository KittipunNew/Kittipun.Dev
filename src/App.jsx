import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import Skill from './components/Skill';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MyProject from './components/MyProject';
import ProjectDetail from './components/ProjectDetail';
import LayoutProjectDetail from './layout/layoutProjectDetail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <AboutMe />
              <Skill />
              <MyProject />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/project/:id"
          element={
            <LayoutProjectDetail>
              <ProjectDetail />
            </LayoutProjectDetail>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
