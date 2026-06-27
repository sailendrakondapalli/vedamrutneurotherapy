import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.css';

const values = [
  { icon: '🌿', title: 'Natural Healing', desc: 'We use only natural methods that work in harmony with the body\'s own healing mechanisms, with zero chemicals or artificial substances.' },
  { icon: '🏅', title: 'Certified Therapist', desc: 'NT. Parmar Ashok Kumar is a nationally certified neurotherapy practitioner with 10+ years of hands-on clinical experience.' },
  { icon: '🎯', title: 'Personalized Treatment', desc: 'Every patient receives a customised treatment plan designed specifically for their condition, body type and health history.' },
  { icon: '💰', title: 'Affordable Care', desc: 'Premium quality neurotherapy at fair, transparent pricing — because good health should be accessible to everyone.' },
  { icon: '🛡️', title: 'Safe Methods', desc: 'Our treatments are completely non-invasive, drug-free and surgery-free. Absolutely no risk of side effects.' },
  { icon: '❤️', title: 'Patient First', desc: 'Every decision we make is guided by what is best for our patients — their comfort, recovery and long-term wellbeing.' },
];

const milestones = [
  { year: '2013', event: 'Vedamrut Pain Management Centre founded in Hanamkonda, Warangal.' },
  { year: '2015', event: 'Treated 200+ patients successfully for back pain and cervical disorders.' },
  { year: '2017', event: 'Expanded treatment portfolio to include paralysis rehabilitation and nerve disorders.' },
  { year: '2019', event: 'Crossed 500+ happy patients milestone. Recognised for excellence in neurotherapy.' },
  { year: '2021', event: 'Introduced advanced techniques for knee replacement avoidance and frozen shoulder.' },
  { year: '2023', event: '1500+ patients treated. Established as Warangal\'s most trusted neurotherapy centre.' },
];

const waNumber = '918499011209';
const waMsg = encodeURIComponent('Hello! I would like to know more about Vedamrut Pain Management & Neurotherapy Treatment Centre.');

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="ap-page">
      {/* Navbar */}
      <nav className="ap-navbar">
        <div className="ap-navbar-inner">
          <Link to="/" className="ap-logo">
            <span className="ap-logo-icon"><img src="/images/guruji.png" alt="Vedamrut" /></span>
            <div>
              <span className="ap-logo-name">Vedamrut</span>
              <span className="ap-logo-sub">Pain &amp; Neurotherapy Centre</span>
            </div>
          </Link>
          <div className="ap-nav-actions">
            <a href="tel:8499011209" className="ap-call-btn">📞 8499011209</a>
            <a
              href={`https://wa.me/${waNumber}?text=${waMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="ap-book-btn"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <section className="ap-hero">
        <img
          src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1600&q=80"
          alt="About Vedamrut"
          className="ap-hero-img"
        />
        <div className="ap-hero-overlay"></div>
        <div className="ap-hero-content">
          <Link to="/" className="ap-breadcrumb">← Back to Home</Link>
          <h1>About <span>Vedamrut</span></h1>
          <p>Dedicated to natural healing since 2013 — Balasamudram, Hanamkonda, Warangal</p>
        </div>
      </section>

      <div className="ap-body">

        {/* Intro */}
        <section className="ap-section ap-intro">
          <div className="ap-container ap-intro-grid">
            <div className="ap-intro-img">
              <img src="/images/doctor.png" alt="NT. Parmar Ashok Kumar" />
              <div className="ap-intro-badge">
                <span className="ap-badge-num">10+</span>
                <span className="ap-badge-txt">Years of Trusted Healing</span>
              </div>
            </div>
            <div className="ap-intro-text">
              <span className="ap-label">Who We Are</span>
              <h2>Vedamrut Pain Management &amp; Neurotherapy Treatment Centre</h2>
              <p>
                Vedamrut Pain Management &amp; Neurotherapy Treatment Centre is dedicated to providing
                natural, non-invasive neurotherapy treatments for various chronic pain conditions.
                Our mission is to improve the quality of life through safe, drug-free and surgery-free
                therapies that deliver lasting results.
              </p>
              <p>
                Founded by <strong>NT. Parmar Ashok Kumar</strong> — a nationally certified
                neurotherapy practitioner — Vedamrut has grown to become Warangal's most trusted
                centre for natural pain management. Located at Balasamudram, Hanamkonda, Warangal,
                we serve patients from across Telangana and beyond.
              </p>
              <p>
                Our approach is rooted in the belief that the human body has an extraordinary ability
                to heal itself when given the right stimulation and support. Neurotherapy activates
                this natural healing power through precise hand techniques applied to specific nerve
                pathways and pressure points — without any medicines, injections, or surgery.
              </p>
              <div className="ap-intro-stats">
                <div className="ap-istat"><strong>1500+</strong><span>Happy Patients</span></div>
                <div className="ap-istat"><strong>5000+</strong><span>Treatments Done</span></div>
                <div className="ap-istat"><strong>98%</strong><span>Recovery Rate</span></div>
                <div className="ap-istat"><strong>10+</strong><span>Years Experience</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="ap-section ap-mv">
          <div className="ap-container ap-mv-grid">
            <div className="ap-mv-card ap-mission">
              <div className="ap-mv-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To provide the highest quality natural neurotherapy treatments that relieve chronic
                pain, restore nerve function, and improve the overall quality of life — without
                surgery, medicines, or side effects. We are committed to making effective pain
                management accessible and affordable for every patient.
              </p>
            </div>
            <div className="ap-mv-card ap-vision">
              <div className="ap-mv-icon">🌟</div>
              <h3>Our Vision</h3>
              <p>
                To be the leading neurotherapy centre in Telangana, recognised for excellence in
                natural healing, patient care, and clinical outcomes. We envision a future where
                every person suffering from chronic pain has access to safe, drug-free, and
                surgery-free treatment options.
              </p>
            </div>
          </div>
        </section>

        {/* About Neurotherapy */}
        <section className="ap-section ap-neuro">
          <div className="ap-container">
            <div className="ap-neuro-grid">
              <div className="ap-neuro-text">
                <span className="ap-label">What is Neurotherapy?</span>
                <h2>The Science Behind Our <span>Natural Healing</span></h2>
                <p>
                  Neurotherapy is an advanced, natural healing system developed in India that works
                  on the principle that the nervous system controls all body functions. When nerves
                  are compressed, blocked, or damaged, the body develops pain, weakness, and disease.
                </p>
                <p>
                  Our neurotherapy techniques use precise manual pressure applied to specific nerve
                  pathways, lymph nodes, and energy points throughout the body. This stimulates blood
                  circulation, releases blocked nerve pathways, reduces inflammation, and activates
                  the body's own healing mechanisms.
                </p>
                <p>
                  The result is natural, lasting pain relief without any medicines, injections, or
                  surgical procedures. Neurotherapy is safe for all ages — from children to the
                  elderly — and has absolutely no side effects.
                </p>
                <div className="ap-neuro-points">
                  {['Completely drug-free', 'No surgery required', 'Safe for all ages', 'No side effects', 'Long-lasting results', 'Treats root cause'].map((pt, i) => (
                    <span key={i} className="ap-neuro-tag">✓ {pt}</span>
                  ))}
                </div>
              </div>
              <div className="ap-neuro-img">
                <img
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=700&q=80"
                  alt="Neurotherapy treatment"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="ap-section ap-values">
          <div className="ap-container">
            <div className="ap-section-header">
              <span className="ap-label">Our Values</span>
              <h2>What Makes Us <span>Different</span></h2>
            </div>
            <div className="ap-values-grid">
              {values.map((v, i) => (
                <div key={i} className="ap-value-card">
                  <div className="ap-value-icon">{v.icon}</div>
                  <h4>{v.title}</h4>
                  <p>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="ap-section ap-timeline">
          <div className="ap-container">
            <div className="ap-section-header">
              <span className="ap-label">Our Journey</span>
              <h2>A Decade of <span>Healing</span></h2>
            </div>
            <div className="ap-timeline-list">
              {milestones.map((m, i) => (
                <div key={i} className={`ap-timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                  <div className="ap-tl-dot"></div>
                  <div className="ap-tl-card">
                    <span className="ap-tl-year">{m.year}</span>
                    <p>{m.event}</p>
                  </div>
                </div>
              ))}
              <div className="ap-tl-line"></div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="ap-section ap-cta">
          <div className="ap-container">
            <div className="ap-cta-inner">
              <h2>Ready to Experience <span>Natural Healing?</span></h2>
              <p>
                Book a free consultation with NT. Parmar Ashok Kumar today and take the first
                step towards a pain-free life.
              </p>
              <div className="ap-cta-btns">
                <a
                  href={`https://wa.me/${waNumber}?text=${waMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ap-wa-btn"
                >
                  📲 Book on WhatsApp
                </a>
                <a href="tel:8499011209" className="ap-phone-btn">
                  📞 Call: 8499011209
                </a>
                <Link to="/#treatments" className="ap-treatments-btn">
                  View All Treatments →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer strip */}
      <div className="ap-footer-strip">
        <p>© {new Date().getFullYear()} Vedamrut Pain Management &amp; Neurotherapy Treatment Centre · Balasamudram, Hanamkonda, Warangal, Telangana - 506001</p>
        <Link to="/">← Back to Home</Link>
      </div>

      {/* Floating WA */}
      <a
        href={`https://wa.me/${waNumber}?text=${waMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        className="ap-float-wa"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2Z" />
        </svg>
      </a>
    </div>
  );
};

export default AboutPage;
