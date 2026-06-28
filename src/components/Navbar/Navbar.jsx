import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const waNumber = '918499011209';
const waMsg = encodeURIComponent('Hello! I would like to book an appointment at Vedamrut Pain Management & Neurotherapy Treatment Centre.');

const Navbar = () => {
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const coursesRef = useRef(null);
  const navigate   = useNavigate();
  const location   = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (coursesRef.current && !coursesRef.current.contains(e.target)) {
        setCoursesOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // ------------------------------------------------------------------
  // scrollTo: works from any page
  // ------------------------------------------------------------------
  const scrollTo = (hash) => {
    closeAll();

    if (location.pathname !== '/') {
      // Navigate home, then scroll after render
      navigate('/');
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 800);
    } else {
      // Already home — wait for drawer to slide out (CSS: 400ms), then scroll
      setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 450);
    }
  };

  // ------------------------------------------------------------------
  // goTo: navigate to a page route
  // ------------------------------------------------------------------
  const goTo = (path) => {
    closeAll();
    navigate(path);
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50);
  };

  const closeAll = () => {
    setMenuOpen(false);
    setCoursesOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">

        {/* Logo */}
        <div className="navbar-logo" onClick={() => scrollTo('#home')}>
          <div className="logo-icon">
            <img src="/images/guruji.png" alt="Vedamrut Logo" className="logo-icon-img" />
          </div>
          <div className="logo-text">
            <span className="logo-main">Vedamrut</span>
            <span className="logo-sub">Pain Management &amp; Neurotherapy Treatment &amp; Training Centre</span>
            <span className="logo-tag">🏆 First Neurotherapy Centre in Tri-Cities</span>
          </div>
        </div>

        {/* Desktop links */}
        <ul className="navbar-links desktop-links">
          <li><button className="nav-btn" onClick={() => scrollTo('#home')}>Home</button></li>
          <li><button className="nav-btn" onClick={() => scrollTo('#about')}>About</button></li>
          <li><button className="nav-btn" onClick={() => scrollTo('#treatments')}>Treatments</button></li>

          {/* Courses dropdown */}
          <li className="has-dropdown" ref={coursesRef}>
            <button className="nav-dropdown-btn" onClick={() => setCoursesOpen(p => !p)}>
              Courses / Training
              <svg className={`nav-chevron ${coursesOpen ? 'open' : ''}`} width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {coursesOpen && (
              <ul className="nav-dropdown">
                <li>
                  <button className="dropdown-item" onClick={() => goTo('/academy')}>
                    <span className="di-icon">🎓</span>
                    <span><strong>LMNT Academy</strong><small>6-month &amp; 1.5-year courses</small></span>
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" onClick={() => goTo('/courses')}>
                    <span className="di-icon">🏛️</span>
                    <span><strong>University Programs</strong><small>B.Voc, M.Voc, Diploma</small></span>
                  </button>
                </li>
              </ul>
            )}
          </li>

          <li><button className="nav-btn" onClick={() => scrollTo('#about-lmnt')}>About Neurotherapy</button></li>
          <li><button className="nav-btn" onClick={() => scrollTo('#results')}>Results</button></li>
          <li><button className="nav-btn" onClick={() => scrollTo('#gallery')}>Gallery</button></li>
          <li><button className="nav-btn" onClick={() => scrollTo('#contact')}>Contact</button></li>
        </ul>

        {/* Desktop CTA */}
        <div className="navbar-cta">
          <a href="tel:8499011209" className="btn-call">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.81 19.79 19.79 0 01.01 2.22 2 2 0 012 .04h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
            </svg>
            Call Now
          </a>
          <a href={`https://wa.me/${waNumber}?text=${waMsg}`} target="_blank" rel="noopener noreferrer" className="btn-book">
            Book Appointment
          </a>
        </div>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(p => !p)}
          aria-label="Toggle menu"
        >
          <span></span><span></span><span></span>
        </button>

        {/* Mobile drawer */}
        <div className={`mobile-drawer ${menuOpen ? 'open' : ''}`}>
          <div className="drawer-badge">
            🏆 First Neurotherapy Centre in Tri-Cities<br />
            <span>Warangal · Kazipet · Hanamkonda</span>
          </div>

          <nav className="drawer-nav">
            <button className="drawer-item" onClick={() => scrollTo('#home')}>🏠 Home</button>
            <button className="drawer-item" onClick={() => scrollTo('#about')}>ℹ️ About</button>
            <button className="drawer-item" onClick={() => scrollTo('#treatments')}>🩺 Treatments</button>

            {/* Courses — two direct links, no accordion */}
            <a href="/academy" className="drawer-item drawer-link" onClick={() => closeAll()}>🎓 Academy</a>
            <a href="/courses" className="drawer-item drawer-link" onClick={() => closeAll()}>🏛️ University Programs</a>

            <button className="drawer-item" onClick={() => scrollTo('#about-lmnt')}>🧠 About Neurotherapy</button>
            <button className="drawer-item" onClick={() => scrollTo('#results')}>🏆 Results</button>
            <button className="drawer-item" onClick={() => scrollTo('#gallery')}>🖼️ Gallery</button>
            <button className="drawer-item" onClick={() => scrollTo('#testimonials')}>⭐ Testimonials</button>
            <button className="drawer-item" onClick={() => scrollTo('#contact')}>📞 Contact</button>
          </nav>

          <div className="drawer-cta">
            <a href="tel:8499011209" className="drawer-call">📞 Call: 8499011209</a>
            <a href={`https://wa.me/${waNumber}?text=${waMsg}`} target="_blank" rel="noopener noreferrer" className="drawer-wa">
              📲 Book on WhatsApp
            </a>
          </div>
        </div>

        {/* Backdrop — pointer-events off when courses open so sub-items are tappable */}
        {menuOpen && (
          <div
            className="nav-backdrop"
            onClick={() => setMenuOpen(false)}
            style={{ pointerEvents: coursesOpen ? 'none' : 'auto' }}
            aria-hidden="true"
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
