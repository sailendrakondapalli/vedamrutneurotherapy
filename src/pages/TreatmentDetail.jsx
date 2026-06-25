import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { treatments } from '../data/treatments';
import './TreatmentDetail.css';

const TreatmentDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const treatment = treatments.find((t) => t.slug === slug);

  const waNumber = '918499011209';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!treatment) {
    return (
      <div className="td-not-found">
        <h2>Treatment not found</h2>
        <Link to="/" className="td-back-btn">← Back to Home</Link>
      </div>
    );
  }

  const waMsg = encodeURIComponent(
    `Hello! I need treatment for ${treatment.title}. Please guide me.`
  );

  const otherTreatments = treatments.filter((t) => t.slug !== slug).slice(0, 4);

  return (
    <div className="td-page">
      {/* Top Nav Bar */}
      <nav className="td-topbar">
        <div className="td-topbar-inner">
          <button className="td-logo" onClick={() => navigate('/')}>
            <span className="td-logo-icon">V</span>
            <span className="td-logo-text">Vedamrut</span>
          </button>
          <div className="td-topbar-actions">
            <a href="tel:8499011209" className="td-call-btn">📞 8499011209</a>
            <a
              href={`https://wa.me/${waNumber}?text=${waMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="td-book-btn"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="td-hero">
        <img src={treatment.heroImg} alt={treatment.title} className="td-hero-img" />
        <div className="td-hero-overlay"></div>
        <div className="td-hero-content">
          <Link to="/" className="td-breadcrumb">← Back to All Treatments</Link>
          <h1 className="td-hero-title">{treatment.title} Treatment</h1>
          <p className="td-hero-sub">{treatment.shortDesc}</p>
          <div className="td-hero-badges">
            <span>✅ No Surgery</span>
            <span>💊 No Medicines</span>
            <span>🌿 Natural Healing</span>
          </div>
        </div>
      </section>

      <div className="td-body container">

        {/* Overview */}
        <section className="td-section" data-aos="fade-up">
          <div className="td-overview-grid">
            <div className="td-overview-text">
              <h2 className="td-section-title">About <span>{treatment.title}</span></h2>
              {treatment.overview.split('\n\n').map((para, i) => (
                <p key={i} className="td-para">{para.trim()}</p>
              ))}
            </div>
            <div className="td-overview-stats">
              <div className="td-stat-card">
                <span className="td-stat-icon">📅</span>
                <strong>Sessions Required</strong>
                <span>{treatment.sessions}</span>
              </div>
              <div className="td-stat-card">
                <span className="td-stat-icon">📈</span>
                <strong>Recovery Rate</strong>
                <span>{treatment.recovery}</span>
              </div>
              <div className="td-stat-card">
                <span className="td-stat-icon">🚫</span>
                <strong>Surgery Required</strong>
                <span>No — Completely Natural</span>
              </div>
              <div className="td-stat-card">
                <span className="td-stat-icon">💊</span>
                <strong>Medicines Required</strong>
                <span>No — Drug-Free Treatment</span>
              </div>
            </div>
          </div>
        </section>

        {/* Causes & Symptoms */}
        <section className="td-section td-two-col" data-aos="fade-up">
          <div className="td-col-card td-causes">
            <h3 className="td-col-title">
              <span className="td-col-icon">🔍</span> Common Causes
            </h3>
            <ul>
              {treatment.causes.map((c, i) => (
                <li key={i}><span className="td-bullet">→</span>{c}</li>
              ))}
            </ul>
          </div>
          <div className="td-col-card td-symptoms">
            <h3 className="td-col-title">
              <span className="td-col-icon">⚠️</span> Symptoms
            </h3>
            <ul>
              {treatment.symptoms.map((s, i) => (
                <li key={i}><span className="td-bullet">→</span>{s}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Treatment Approach */}
        <section className="td-section td-treatment-steps" data-aos="fade-up">
          <h2 className="td-section-title">
            Our <span>Treatment Approach</span>
          </h2>
          <div className="td-steps-grid">
            {treatment.treatment.map((step, i) => (
              <div key={i} className="td-step-card">
                <div className="td-step-num">{String(i + 1).padStart(2, '0')}</div>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="td-cta" data-aos="fade-up">
          <div className="td-cta-inner">
            <h2>Ready to get relief from <span>{treatment.title}?</span></h2>
            <p>Book a free consultation today. Our expert therapist NT. Parmar Ashok Kumar will create a personalised treatment plan for you.</p>
            <div className="td-cta-btns">
              <a
                href={`https://wa.me/${waNumber}?text=${waMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="td-wa-btn"
              >
                📲 Book Appointment on WhatsApp
              </a>
              <a href="tel:8499011209" className="td-phone-btn">
                📞 Call: 8499011209
              </a>
            </div>
          </div>
        </section>

        {/* Other Treatments */}
        <section className="td-section td-other" data-aos="fade-up">
          <h2 className="td-section-title">Other <span>Treatments</span></h2>
          <div className="td-other-grid">
            {otherTreatments.map((t) => (
              <Link key={t.slug} to={`/treatment/${t.slug}`} className="td-other-card">
                <img src={t.img} alt={t.title} loading="lazy" />
                <div className="td-other-body">
                  <h4>{t.title}</h4>
                  <p>{t.shortDesc}</p>
                  <span className="td-other-link">Learn More →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>

      {/* Footer Strip */}
      <div className="td-footer-strip">
        <p>© {new Date().getFullYear()} Vedamrut Pain Management &amp; Neurotherapy Treatment Centre · Balasamudram, Hanamkonda, Warangal</p>
        <Link to="/">← Back to Home</Link>
      </div>

      {/* Floating WhatsApp */}
      <a
        href={`https://wa.me/${waNumber}?text=${waMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        className="td-float-wa"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2Z"/>
        </svg>
      </a>
    </div>
  );
};

export default TreatmentDetail;
