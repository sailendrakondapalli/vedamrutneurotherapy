import { useState } from 'react';
import { Link } from 'react-router-dom';
import './CoursesPreview.css';

const CoursesPreview = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="courses" className="cprev-section">
      <div className="cprev-bg" />
      <div className="container cprev-inner">
        <div className="cprev-header" data-aos="fade-up">
          <span className="section-subtitle" style={{ color: '#6ee7b7' }}>Training &amp; Education</span>
          <h2 className="section-title" style={{ color: 'white' }}>
            Build a Career in <span style={{ color: '#6ee7b7' }}>Neurotherapy</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.76)', marginTop: 12, fontSize: '0.95rem', textAlign: 'center' }}>
            Two pathways — Academy training and University-accredited degree programs.
          </p>
        </div>

        {/* Toggle tabs */}
        <div className="cprev-tabs" data-aos="fade-up">
          <button className={`cprev-tab${active === 0 ? ' active' : ''}`} onClick={() => setActive(0)}>
            🎓 Academy Programs
          </button>
          <button className={`cprev-tab${active === 1 ? ' active' : ''}`} onClick={() => setActive(1)}>
            🏛️ University Programs
          </button>
        </div>

        {/* Academy Panel */}
        {active === 0 && (
          <div className="cprev-panel" data-aos="fade-up">
            <div className="cprev-grid">
              <div className="cprev-card">
                <div className="cprev-card-top">
                  <span className="cprev-badge">6 Months</span>
                  <h3>Certificate Course in LMNT</h3>
                  <p>Part Time · Self Employed Therapist</p>
                </div>
                <ul className="cprev-list">
                  <li>✓ Practical study of Neurotherapy</li>
                  <li>✓ Treat patients under senior consultant</li>
                  <li>✓ Online / Centre-based practice</li>
                  <li>✓ Eligibility: 10+2 Any Stream</li>
                </ul>
                <Link to="/academy" className="cprev-btn">Enroll / Learn More →</Link>
              </div>
              <div className="cprev-card cprev-card-featured">
                <div className="cprev-card-top">
                  <span className="cprev-badge cprev-badge-gold">1.5 Years</span>
                  <h3>Diploma Course in NT</h3>
                  <p>Part Time · Full Neurotherapy Consultant</p>
                </div>
                <ul className="cprev-list">
                  <li>✓ Theory + Practical + Internship</li>
                  <li>✓ Online (M/W/F &amp; T/T/S evenings)</li>
                  <li>✓ Anatomy, Physiology, Neurotherapy Papers</li>
                  <li>✓ Eligibility: 10+2 Any Stream</li>
                </ul>
                <Link to="/academy" className="cprev-btn">Enroll / Learn More →</Link>
              </div>
              <div className="cprev-info-card">
                <div className="cprev-info-icon">🏫</div>
                <h4>Dr. Lajpatrai Mehra Neurotherapy Academy</h4>
                <p>Founded in 1999 by Guruji. Residential training &amp; research centre with experienced faculty trained directly under the founder.</p>
                <div className="cprev-mini-stats">
                  <div><strong>3000+</strong><small>Therapists</small></div>
                  <div><strong>1500+</strong><small>Centers</small></div>
                  <div><strong>₹300Cr</strong><small>Earnings/yr</small></div>
                </div>
                <Link to="/academy" className="cprev-btn cprev-btn-outline">View Full Academy Details →</Link>
              </div>
            </div>
          </div>
        )}

        {/* University Panel */}
        {active === 1 && (
          <div className="cprev-panel" data-aos="fade-up">
            <div className="cprev-grid">
              {[
                { badge: 'B.Voc', title: 'B.Voc YSNT', sub: 'Undergraduate · OM Sterling Global University', points: ['Admission: May–August Batch','Fee: INR 30,000/Semester','Practical: INR 5,000/Month','Training at Authorized NT Centers'] },
                { badge: 'M.Voc', title: 'M.Voc YSNT', sub: 'Postgraduate · OM Sterling Global University', points: ['Eligibility: Graduation (Any Stream)','Admission: May–August Batch','Fee: INR 35,000/Semester','Practical: INR 5,000/Month'] },
                { badge: 'Diploma', title: 'DYSNT', sub: 'Specialized · OM Sterling Global University', points: ['Duration: 1 Year / 10+2 Stream','Admission: May–August Batch','Fee: INR 30,000/Semester','Practical: INR 5,000/Month'] },
                { badge: 'Certificate', title: 'CCNT', sub: 'Gandhinagar University, Ahmedabad', points: ['Duration: 1 Year + 6 Months Internship','Eligibility: 10+2 Any Stream','Admission: July/August','Fee: INR 25,000 + ₹5K/Month'] },
              ].map((c,i) => (
                <div key={i} className="cprev-card">
                  <div className="cprev-card-top">
                    <span className="cprev-badge">{c.badge}</span>
                    <h3>{c.title}</h3>
                    <p>{c.sub}</p>
                  </div>
                  <ul className="cprev-list">
                    {c.points.map((pt,j) => <li key={j}>✓ {pt}</li>)}
                  </ul>
                  <Link to="/courses" className="cprev-btn">Enroll / Learn More →</Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CoursesPreview;
