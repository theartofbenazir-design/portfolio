import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/projects';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSec, setActiveSec] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

      if (location.pathname === '/') {
        const sections = ['home', 'work', 'about', 'services', 'process', 'achievements', 'contact'];
        const scrollPos = window.scrollY + 140;

        for (const s of sections) {
          const el = document.getElementById(s);
          if (el) {
            const top = el.offsetTop;
            const h = el.offsetHeight;
            if (scrollPos >= top && scrollPos < top + h) {
              setActiveSec(s);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNav = (e, targetId) => {
    e.preventDefault();
    setMobileOpen(false);

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          {/* Wordmark */}
          <a
            href="#home"
            onClick={(e) => handleNav(e, 'home')}
            className="wordmark"
            aria-label={`${PERSONAL_INFO.name} Portfolio`}
          >
            <span>{PERSONAL_INFO.name.toUpperCase()}</span>
            <span className="wordmark-dot" />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)', marginLeft: '4px' }}>
              STUDIO
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="nav-links" aria-label="Desktop Navigation">
            <a
              href="#work"
              onClick={(e) => handleNav(e, 'work')}
              className={`nav-link ${location.pathname === '/' && activeSec === 'work' ? 'active' : ''}`}
            >
              Work
            </a>
            <a
              href="#about"
              onClick={(e) => handleNav(e, 'about')}
              className={`nav-link ${location.pathname === '/' && activeSec === 'about' ? 'active' : ''}`}
            >
              About
            </a>
            <a
              href="#services"
              onClick={(e) => handleNav(e, 'services')}
              className={`nav-link ${location.pathname === '/' && activeSec === 'services' ? 'active' : ''}`}
            >
              Services
            </a>
            <a
              href="#process"
              onClick={(e) => handleNav(e, 'process')}
              className={`nav-link ${location.pathname === '/' && activeSec === 'process' ? 'active' : ''}`}
            >
              Process
            </a>
            <a
              href="#achievements"
              onClick={(e) => handleNav(e, 'achievements')}
              className={`nav-link ${location.pathname === '/' && activeSec === 'achievements' ? 'active' : ''}`}
            >
              Achievements
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNav(e, 'contact')}
              className={`nav-link ${location.pathname === '/' && activeSec === 'contact' ? 'active' : ''}`}
            >
              Contact
            </a>
          </nav>

          {/* Action CTAs & Mobile Toggle */}
          <div className="nav-actions">
            <a
              href="#contact"
              onClick={(e) => handleNav(e, 'contact')}
              className="btn btn-secondary"
              style={{ padding: '0.55rem 1.15rem', fontSize: 'var(--text-xs)' }}
            >
              <span>Let's Talk</span>
              <ArrowUpRight size={14} color="#C7FF3D" />
            </a>

            <button
              type="button"
              className="hamburger-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Backdrop & Drawer */}
      {mobileOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        className="mobile-menu"
        style={{
          transform: mobileOpen ? 'translateY(0)' : 'translateY(-120%)',
          transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        role="dialog"
        aria-modal="true"
      >
        <a href="#work" onClick={(e) => handleNav(e, 'work')} className="mobile-nav-link">
          <span>Work</span>
          <ArrowUpRight size={18} color="#C7FF3D" />
        </a>
        <a href="#about" onClick={(e) => handleNav(e, 'about')} className="mobile-nav-link">
          <span>About</span>
          <ArrowUpRight size={18} color="#C7FF3D" />
        </a>
        <a href="#services" onClick={(e) => handleNav(e, 'services')} className="mobile-nav-link">
          <span>Services</span>
          <ArrowUpRight size={18} color="#C7FF3D" />
        </a>
        <a href="#process" onClick={(e) => handleNav(e, 'process')} className="mobile-nav-link">
          <span>Process</span>
          <ArrowUpRight size={18} color="#C7FF3D" />
        </a>
        <a href="#achievements" onClick={(e) => handleNav(e, 'achievements')} className="mobile-nav-link">
          <span>Achievements</span>
          <ArrowUpRight size={18} color="#C7FF3D" />
        </a>
        <a href="#contact" onClick={(e) => handleNav(e, 'contact')} className="mobile-nav-link">
          <span>Contact</span>
          <ArrowUpRight size={18} color="#C7FF3D" />
        </a>
      </div>
    </>
  );
}
