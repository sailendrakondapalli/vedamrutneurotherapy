import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './GurujiPage.css';

const stats = [
  { value: '5M+', label: 'Patients Treated' },
  { value: '3000+', label: 'Neurotherapists Trained' },
  { value: '2000+', label: 'LMNT Centers' },
  { value: '1932–2017', label: 'Life Span' },
];

const timeline = [
  { year: '1932', event: 'Born in Amritsar into a large, respected family.' },
  { year: '1943', event: 'Cured of chronic stomach ailment by traditional "navel setting" — sparked lifelong passion for drugless healing.' },
  { year: 'Post-Partition', event: 'Family migrated to Mumbai. Despite hardships, continued natural healing practice using body mechanics and pressure-based therapy.' },
  { year: '1986', event: 'Established Bandra clinic. Formally began treating patients with LMNT techniques.' },
  { year: '1994', event: 'Founded Suryamal Ashram, Palghar — free weekly LMNT treatment for tribal communities. Conferred Doctor of Medicine (Colombo).' },
  { year: '1999', event: 'Founded Dr. Lajpatrai Mehra Neurotherapy Academy — residential training & research centre empowering students from India and abroad.' },
  { year: '2004', event: 'Conferred Doctor of Science (Mumbai) for path-breaking work in Complementary Medicine.' },
  { year: '2017', event: 'Passed away in October, leaving behind a legacy of 5 million healed, 3000+ trained therapists across 2000+ locations.' },
];

const waNumber = '918499011209';

const GurujiPage = () => {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, []);

  return (
    <div className="gjp-page">
      {/* Navbar */}
      <nav className="gjp-navbar">
        <div className="gjp-navbar-inner">
          <Link to="/" className="gjp-logo">
            <span className="gjp-logo-icon"><img src="/images/guruji.png" alt="Vedamrut" /></span>
            <div>
              <span className="gjp-logo-name">Vedamrut</span>
              <span className="gjp-logo-sub">Pain &amp; Neurotherapy Centre</span>
            </div>
          </Link>
          <div className="gjp-nav-actions">
            <a href="tel:8499011209" className="gjp-call-btn">📞 8499011209</a>
            <a
              href={`https://wa.me/${waNumber}?text=${encodeURIComponent('Hello! I want to book an appointment at Vedamrut Neurotherapy.')}`}
              target="_blank" rel="noopener noreferrer"
              className="gjp-book-btn"
            >Book Appointment</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="gjp-hero">
        <div className="gjp-hero-overlay" />
        <div className="gjp-hero-content">
          <Link to="/" className="gjp-breadcrumb">← Back to Home</Link>
          <h1>Late Dr. <span>Lajpatrai Mehra</span></h1>
          <p>N.D., M.D.(ASM) · Founder of LMNT · Humanitarian · Innovator · Spiritual Scientist</p>
        </div>
      </section>

      <div className="gjp-body">
        {/* Main grid */}
        <section className="gjp-section gjp-main-grid gjp-container">
          {/* Left — image */}
          <div className="gjp-img-col">
            <div className="gjp-img-card">
              <img src="/images/guruji.png" alt="Late Dr. Lajpatrai Mehra" loading="lazy" />
            </div>
            <div className="gjp-name-plate">
              <h3>Late Dr. Lajpatrai Mehra</h3>
              <p>N.D., M.D.(ASM)</p>
              <span>Founder of LMNT · 1932–2017</span>
            </div>
            <div className="gjp-stats">
              {stats.map((s, i) => (
                <div key={i} className="gjp-stat">
                  <strong>{s.value}</strong>
                  <small>{s.label}</small>
                </div>
              ))}
            </div>
          </div>

          {/* Right — content */}
          <div className="gjp-content-col">
            <div className="gjp-title-block">
              <span className="gjp-tag">Our Inspiration</span>
              <h2>About Guruji</h2>
              <p className="gjp-roles">Founder of LMNT &nbsp;|&nbsp; Humanitarian &nbsp;|&nbsp; Innovator &nbsp;|&nbsp; Spiritual Scientist</p>
            </div>

            <p className="gjp-para">
              Guruji – Late Dr. Lajpatrai Mehra ji (1932–2017) was a self-made scientist, healer, and
              humanitarian whose visionary contribution to healthcare revolutionized natural and drugless
              healing in India. He was the Founder of Dr. Lajpatrai Mehra's Neurotherapy (LMNT) — a
              ground-breaking, medicine-free system of healing rooted in the wisdom of ancient Indian
              physiology and his own clinical innovations.
            </p>

            <div className="gjp-quote-box">
              <span className="gjp-qmark">"</span>
              <p>Health is the birth right of every individual.</p>
              <span className="gjp-qauthor">— Late Dr. Lajpatrai Mehra (Guruji)</span>
            </div>

            <div className="gjp-sub">
              <h4>🌱 Early Inspiration</h4>
              <p>Born in Amritsar into a large, respected family, young Lajpatrai's life changed at the age of 11 when he was miraculously cured of a chronic stomach ailment by an old woman (Daayi) using a traditional "navel setting" technique. That moment awakened in him a lifelong passion to help others without the use of medicines.</p>
            </div>

            <div className="gjp-sub">
              <h4>💪 From Adversity to Innovation</h4>
              <p>After losing everything during the Partition, his family migrated to Mumbai. Despite hardships, he continued to heal people using his growing understanding of natural body mechanics and pressure-based therapy. With just a 10th standard formal education, he earned a degree in Naturopathy and immersed himself in intensive self-study of human anatomy, physiology, and ancient Indian healing systems.</p>
            </div>

            <div className="gjp-sub">
              <h4>🏛️ Birth of LMNT</h4>
              <p>By 1986, he established his Bandra clinic and formally began treating patients with his unique techniques. Over decades of hands-on practice and study, he created LMNT — a holistic, drugless therapy aimed at restoring the body's biochemical and hormonal balance through carefully sequenced pressure stimulation. His treatments addressed the root causes of illness, not just symptoms, and were tailored to the patient's unique constitution and locality.</p>
            </div>

            <div className="gjp-sub">
              <h4>🌍 Global Impact</h4>
              <ul className="gjp-list">
                <li>Treated over <strong>5 million patients</strong> across India and abroad — UK, Australia, Canada, Bulgaria, Serbia, Singapore, USA, Hong Kong, Italy, Nepal and more.</li>
                <li>Trained more than <strong>3000 neurotherapists</strong>, many of whom now run LMNT centers across <strong>2000+ locations</strong>.</li>
                <li>Inspired self-employment and community service in youth through vocational training and healing service.</li>
              </ul>
            </div>

            <div className="gjp-sub">
              <h4>🏫 Institution Builder &amp; Educator</h4>
              <ul className="gjp-list">
                <li>In 1994, established the <strong>Suryamal Ashram</strong> in Dist. Palghar (then Mokhada), offering free weekly LMNT treatment for tribals and the underserved.</li>
                <li>In 1999, founded the <strong>Dr. Lajpatrai Mehra Neurotherapy Academy</strong>, a residential training and research centre, empowering students from across India and abroad.</li>
                <li>Authored the <strong>LMNT Manual</strong>, translated into multiple languages, and initiated Annual National LMNT Conventions, case study publications, and research documentation.</li>
              </ul>
            </div>

            <div className="gjp-sub">
              <h4>🏅 Humanitarian Service &amp; Recognition</h4>
              <ul className="gjp-list">
                <li>Donated and served actively during wartime and natural disasters.</li>
                <li>Conferred <strong>Doctor of Medicine</strong> (Colombo, 1994) and <strong>Doctor of Science</strong> (Mumbai, 2004) for his path-breaking work in Complementary Medicine.</li>
                <li>His work was recognized by Parliamentarians, Judges, Doctors, and Social Leaders across India.</li>
              </ul>
            </div>

            <div className="gjp-sub">
              <h4>🎯 Mission &amp; Philosophy</h4>
              <p>Guruji's mission was to ensure that one in every six villages in India had access to drugless healing through LMNT. His core values were:</p>
              <ul className="gjp-list">
                <li>Healing without medicines, regardless of caste, creed, or cost.</li>
                <li>Spreading self-reliance through knowledge sharing and student empowerment.</li>
                <li>Bridging tradition and science through applied, observable healing practices.</li>
                <li>He believed, <em>"Health is the birth right of every individual,"</em> and worked tirelessly — often 16 hours a day — to fulfil this ideal until his last breath in October 2017.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="gjp-section gjp-container">
          <h3 className="gjp-timeline-title">Journey of a Legend</h3>
          <div className="gjp-timeline">
            {timeline.map((t, i) => (
              <div key={i} className="gjp-tl-item">
                <div className="gjp-tl-dot" />
                <div className="gjp-tl-card">
                  <span className="gjp-tl-year">{t.year}</span>
                  <p>{t.event}</p>
                </div>
              </div>
            ))}
            <div className="gjp-tl-line" />
          </div>
        </section>

        {/* CTA */}
        <section className="gjp-section gjp-container">
          <div className="gjp-cta">
            <div>
              <h3>Experience LMNT at Vedamrut</h3>
              <p>Carrying forward Guruji's legacy — natural, drugless neurotherapy in Warangal.</p>
            </div>
            <div className="gjp-cta-btns">
              <a
                href={`https://wa.me/${waNumber}?text=${encodeURIComponent('Hello! I want to book an appointment at Vedamrut Neurotherapy.')}`}
                target="_blank" rel="noopener noreferrer"
                className="gjp-wa-btn"
              >📲 Book Appointment</a>
              <Link to="/about-lmnt" className="gjp-lmnt-btn">Learn About LMNT →</Link>
            </div>
          </div>
        </section>
      </div>

      <div className="gjp-footer-strip">
        <p>© {new Date().getFullYear()} Vedamrut Pain Management &amp; Neurotherapy Treatment Centre · Warangal</p>
        <Link to="/">← Back to Home</Link>
      </div>

      <a
        href={`https://wa.me/${waNumber}?text=${encodeURIComponent('Hello! I want to book an appointment at Vedamrut Neurotherapy.')}`}
        target="_blank" rel="noopener noreferrer"
        className="gjp-float-wa" aria-label="WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.86 9.86 0 004.74 1.21c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01C17.18 3.03 14.69 2 12.04 2z"/>
        </svg>
      </a>
    </div>
  );
};

export default GurujiPage;
