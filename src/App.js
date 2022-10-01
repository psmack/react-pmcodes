import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home'
import AboutMe from './components/pages/AboutMe';
import Projects from './components/pages/Projects';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={< Home />}/>
          <Route exact path="/aboutme" element={< AboutMe />}/> 
          <Route exact path="/projects" element={< Projects />}/> 
        </Routes>
        <Footer />
      </Router>
    </>  
  );
}

export default App;