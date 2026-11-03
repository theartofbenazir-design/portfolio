import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import './styles/theme.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="portfolio-app-root">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
