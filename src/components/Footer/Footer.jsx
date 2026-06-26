import './Footer.css';

const Footer = () => {
  const waNumber = '918499011209';
  const waMsg = encodeURIComponent('Hello! I would like to book an appointment at Vedamrut Pain Management & Neurotherapy Treatment Centre.');

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Treatments', href: '#treatments' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const services = [
    'Back Pain Treatment',
    'Neck Pain Treatment',
    'Knee Pain Treatment',
    'Sciatica Treatment',
    'Shoulder Pain',
    'Paralysis Recovery',
    'Migraine Treatment',
    'Nerve Disorders',
  ];

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <img src="/images/guruji.png" alt="Vedamrut Logo" className="footer-logo-img" />
              </div>
              <div>
                <span className="footer-logo-name">Vedamrut</span>
                <span className="footer-logo-sub">Pain &amp; Neurotherapy Centre</span>
              </div>
            </div>
            <p className="footer-about">
              Natural, non-invasive neurotherapy treatments for chronic pain. Trusted by 1500+ patients
              in Warangal. No surgery, no medicines — just natural healing.
            </p>
            <div className="footer-socials">
              <a
                href={`https://wa.me/${waNumber}?text=${waMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn whatsapp"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2Z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn facebook"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn instagram"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://maps.app.goo.gl/FmxHM6aVGXPh7ksz6"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn maps"
                aria-label="Google Maps"
              >
                📍
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((l, i) => (
                <li key={i}>
                  <a href={l.href} onClick={(e) => { e.preventDefault(); document.querySelector(l.href)?.scrollIntoView({ behavior: 'smooth' }); }}>
                    <span>→</span> {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4 className="footer-heading">Our Treatments</h4>
            <ul className="footer-links">
              {services.map((s, i) => (
                <li key={i}>
                  <a href="#treatments" onClick={(e) => { e.preventDefault(); document.querySelector('#treatments')?.scrollIntoView({ behavior: 'smooth' }); }}>
                    <span>→</span> {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4 className="footer-heading">Contact Us</h4>
            <div className="footer-contact-items">
              <div className="footer-contact-item">
                <span>📞</span>
                <a href="tel:8499011209">8499011209</a>
              </div>
              <div className="footer-contact-item">
                <span>📍</span>
                <p>Balasamudram, Hanamkonda,<br />Warangal, Telangana - 506001</p>
              </div>
              <div className="footer-contact-item">
                <span>🕐</span>
                <div>
                  <p>Mon–Sat: 9 AM – 7 PM</p>
                  <p>Sunday: Appointment Only</p>
                </div>
              </div>
            </div>
            <a
              href={`https://wa.me/${waNumber}?text=${waMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-wa-btn"
            >
              📲 Book on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {new Date().getFullYear()} Vedamrut Pain Management &amp; Neurotherapy Treatment Centre. All rights reserved.</p>
        </div>
      </div>

      <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
        ↑
      </button>
    </footer>
  );
};

export default Footer;
