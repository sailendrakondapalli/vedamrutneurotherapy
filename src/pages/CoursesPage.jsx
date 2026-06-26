import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CoursesPage.css';

const waNumber = '918499011209';

const programs = [
  {
    category: 'Undergraduate Programs',
    categoryIcon: '🎓',
    accent: '#0B6E4F',
    courses: [
      {
        title: 'B.Voc. in Yogic Science Neuro Therapy',
        short: 'B.Voc YSNT',
        partner: 'LMNTRTI Knowledge Partner: OM Sterling Global University',
        details: [
          { label: 'Admission Time', value: 'May, June & July (August Batch)' },
          { label: 'Enrollment Fee', value: 'INR 30,000 / Semester' },
          { label: 'Practical Charges', value: 'INR 5,000 / Month' },
          { label: 'Training', value: 'Authorized NT Centers' },
        ],
      },
    ],
  },
  {
    category: 'Postgraduate Programs',
    categoryIcon: '🏛️',
    accent: '#1D9A6C',
    courses: [
      {
        title: 'M.Voc. in Yogic Science Neuro Therapy',
        short: 'M.Voc YSNT',
        partner: 'LMNTRTI Knowledge Partner: OM Sterling Global University',
        details: [
          { label: 'Eligibility', value: 'Graduation (Any Stream)' },
          { label: 'Admission Time', value: 'May, June & July (August Batch)' },
          { label: 'Enrollment Fee', value: 'INR 35,000 / Semester' },
          { label: 'Practical Charges', value: 'INR 5,000 / Month' },
        ],
      },
    ],
  },
  {
    category: 'Specialized Programs',
    categoryIcon: '📜',
    accent: '#0B6E4F',
    courses: [
      {
        title: 'Diploma in Yogic Science Neuro Therapy',
        short: 'DYSNT',
        partner: 'LMNTRTI Knowledge Partner: OM Sterling Global University',
        details: [
          { label: 'Duration / Eligibility', value: '1 Year / 10+2 (Any Stream)' },
          { label: 'Admission Time', value: 'May, June & July (August Batch)' },
          { label: 'Enrollment Fee', value: 'INR 30,000 / Semester' },
          { label: 'Practical Charges', value: 'INR 5,000 / Month' },
        ],
      },
      {
        title: 'Certificate Course in Neuro Therapy',
        short: 'CCNT',
        partner: 'Gandhinagar University, Ahmedabad, Gujarat',
        details: [
          { label: 'Duration', value: '1 Year (Incl. 6 Months Internship)' },
          { label: 'Eligibility', value: '10+2 (Any Stream)' },
          { label: 'Admission Time', value: 'July / August' },
          { label: 'Enrollment Fee', value: 'INR 25,000' },
          { label: 'Practical Charges', value: 'INR 5,000 / Month' },
          { label: 'Internship Fee', value: 'INR 5,000 / Month' },
        ],
      },
    ],
  },
];

const CoursesPage = () => {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, []);

  const waMsg = (title) =>
    encodeURIComponent(`Hello! I am interested in enrolling for the ${title} program at Vedamrut Neurotherapy. Please guide me.`);

  return (
    <div className="cp-page">
      {/* Navbar */}
      <nav className="cp-navbar">
        <div className="cp-navbar-inner">
          <Link to="/" className="cp-logo">
            <span className="cp-logo-icon">V</span>
            <div>
              <span className="cp-logo-name">Vedamrut</span>
              <span className="cp-logo-sub">Pain &amp; Neurotherapy Centre</span>
            </div>
          </Link>
          <div className="cp-nav-actions">
            <a href="tel:8499011209" className="cp-call-btn">📞 8499011209</a>
            <a
              href={`https://wa.me/${waNumber}?text=${encodeURIComponent('Hello! I want to know about neurotherapy academic programs.')}`}
              target="_blank" rel="noopener noreferrer"
              className="cp-book-btn"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero banner */}
      <section className="cp-hero">
        <div className="cp-hero-overlay" />
        <div className="cp-hero-content">
          <Link to="/" className="cp-breadcrumb">← Back to Home</Link>
          <h1>Academic <span>Programs</span></h1>
          <p>University-level certificate, graduation &amp; master's degree programs in Neurotherapy</p>
        </div>
      </section>

      {/* Intro */}
      <section className="cp-intro">
        <div className="cp-container">
          <div className="cp-intro-box">
            <span className="cp-intro-icon">🎓</span>
            <div>
              <h2>Build a Career in Neurotherapy</h2>
              <p>
                If you want to build a career in neurotherapy or practice it professionally, we offer
                university-level certificate, graduation, and master's degree programs. You can enroll
                in these programs and learn in this field.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="cp-programs">
        <div className="cp-container">
          {programs.map((group, gi) => (
            <div key={gi} className="cp-group">
              <div className="cp-group-header">
                <span className="cp-group-icon">{group.categoryIcon}</span>
                <h3>{group.category}</h3>
              </div>

              <div className={`cp-cards ${group.courses.length === 1 ? 'single' : ''}`}>
                {group.courses.map((course, ci) => (
                  <div key={ci} className="cp-card" style={{ '--accent': group.accent }}>
                    <div className="cp-card-top">
                      <span className="cp-badge">{course.short}</span>
                      <h4 className="cp-title">{course.title}</h4>
                      <p className="cp-partner">🏫 {course.partner}</p>
                    </div>

                    <div className="cp-details">
                      {course.details.map((d, di) => (
                        <div key={di} className="cp-detail-row">
                          <span className="cp-detail-label">{d.label}</span>
                          <span className="cp-detail-value">{d.value}</span>
                        </div>
                      ))}
                    </div>

                    <a
                      href={`https://wa.me/${waNumber}?text=${waMsg(course.title)}`}
                      target="_blank" rel="noopener noreferrer"
                      className="cp-enroll-btn"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.86 9.86 0 004.74 1.21c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01C17.18 3.03 14.69 2 12.04 2z"/>
                      </svg>
                      Enroll Now on WhatsApp
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Bottom CTA */}
          <div className="cp-cta">
            <div className="cp-cta-inner">
              <span>📋</span>
              <div>
                <strong>Need guidance choosing a program?</strong>
                <p>Contact us and we'll help you pick the right course for your goals.</p>
              </div>
              <a
                href={`https://wa.me/${waNumber}?text=${encodeURIComponent('Hello! I need guidance to choose a neurotherapy academic program.')}`}
                target="_blank" rel="noopener noreferrer"
                className="cp-cta-btn"
              >
                📲 Get Guidance
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer strip */}
      <div className="cp-footer-strip">
        <p>© {new Date().getFullYear()} Vedamrut Pain Management &amp; Neurotherapy Treatment Centre · Warangal, Telangana</p>
        <Link to="/">← Back to Home</Link>
      </div>

      {/* Floating WA */}
      <a
        href={`https://wa.me/${waNumber}?text=${encodeURIComponent('Hello! I am interested in your neurotherapy programs.')}`}
        target="_blank" rel="noopener noreferrer"
        className="cp-float-wa"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.86 9.86 0 004.74 1.21c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01C17.18 3.03 14.69 2 12.04 2z"/>
        </svg>
      </a>
    </div>
  );
};

export default CoursesPage;
