import { Link } from 'react-router-dom';
import './CoursesPreview.css';

const highlights = [
  { icon: '🎓', label: 'B.Voc YSNT', sub: 'Undergraduate' },
  { icon: '🏛️', label: 'M.Voc YSNT', sub: 'Postgraduate' },
  { icon: '📜', label: 'DYSNT', sub: 'Diploma' },
  { icon: '🏅', label: 'CCNT', sub: 'Certificate' },
];

const CoursesPreview = () => (
  <section id="courses" className="cprev-section">
    <div className="cprev-bg" />
    <div className="container cprev-inner">
      <div className="cprev-left" data-aos="fade-right">
        <span className="section-subtitle" style={{ color: '#6ee7b7' }}>Academic Programs</span>
        <h2 className="section-title" style={{ color: 'white' }}>
          Build a Career in <span style={{ color: '#6ee7b7' }}>Neurotherapy</span>
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.78)', marginTop: 14, lineHeight: 1.8, fontSize: '0.97rem', maxWidth: 480 }}>
          We offer university-level certificate, graduation, and master's degree programs
          in neurotherapy. Enroll and build a professional career in this natural healing field.
        </p>
        <div className="cprev-badges">
          {highlights.map((h, i) => (
            <div key={i} className="cprev-badge">
              <span>{h.icon}</span>
              <div>
                <strong>{h.label}</strong>
                <small>{h.sub}</small>
              </div>
            </div>
          ))}
        </div>
        <Link to="/courses" className="cprev-btn">
          View All Programs →
        </Link>
      </div>

      <div className="cprev-right" data-aos="fade-left" data-aos-delay="100">
        <div className="cprev-card">
          <div className="cprev-card-icon">🎓</div>
          <h3>Start Your Neurotherapy Career</h3>
          <p>University-certified programs from OM Sterling Global University & Gandhinagar University.</p>
          <ul className="cprev-list">
            <li>✓ No prior medical degree required</li>
            <li>✓ Practical training at authorized NT centers</li>
            <li>✓ Internship included in select programs</li>
            <li>✓ Admission open: May–August</li>
          </ul>
          <Link to="/courses" className="cprev-card-btn">
            Explore Programs &amp; Fees →
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default CoursesPreview;
