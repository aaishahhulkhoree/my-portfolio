import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import CookieBanner from './components/CookieBanner';

const App = () => {
  const [cookiesAccepted, setCookiesAccepted] = React.useState(false);


  return (
    <>
      {!cookiesAccepted && <CookieBanner onAccept={() => setCookiesAccepted(true)} />}  

      <div style={{ filter: cookiesAccepted ? 'none' : 'blur(4px)', pointerEvents: cookiesAccepted ? 'auto' : 'none' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;