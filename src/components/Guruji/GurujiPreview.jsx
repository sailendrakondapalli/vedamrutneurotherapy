import { Link } from 'react-router-dom';
import './GurujiPreview.css';

const GurujiPreview = () => (
  <section className="gp-section">
    <div className="container">
      <div className="gp-grid">
        {/* Guruji Card */}
        <div className="gp-card" data-aos="fade-right">
          <div className="gp-card-img">
            <img src="/images/guruji.png" alt="Late Dr. Lajpatrai Mehra" loading="lazy" />
          </div>
          <div className="gp-card-body">
            <span className="gp-tag">Our Inspiration</span>
            <h3>Late Dr. Lajpatrai Mehra</h3>
            <p className="gp-designation">N.D., M.D.(ASM) · Founder of LMNT · Humanitarian · 1932–2017</p>
            <p className="gp-desc">
              A self-made scientist and healer who revolutionized natural, drugless healing in India.
              Treated over 5 million patients, trained 3000+ neurotherapists across 2000+ locations.
            </p>
            <div className="gp-mini-stats">
              <div><strong>5M+</strong><span>Patients</span></div>
              <div><strong>3000+</strong><span>Therapists</span></div>
              <div><strong>2000+</strong><span>Centers</span></div>
            </div>
            <Link to="/guruji" className="gp-btn">
              Read Full Biography →
            </Link>
          </div>
        </div>

        {/* LMNT Card */}
        <div className="gp-card gp-card-lmnt" data-aos="fade-left">
          <div className="gp-card-img gp-lmnt-img">
            <img
              src="/images/APNQkAEsNsnwFmaq6pVEuhg2BCMn7u13w52BSgMc9blmG4av-ioqMM6O7Do7tJAvnGTQZxguSw3-9-JdXd7aHyhS2NSkGWobIeMj-cjzpGVZPStl4aUL8_ZpcaIzjysTTRBkNUcK_H3OxOzozLTw2048-h1365-k-no.jpg.jpeg"
              alt="LMNT Neurotherapy"
              loading="lazy"
            />
            <div className="gp-lmnt-badge">LMNT</div>
          </div>
          <div className="gp-card-body">
            <span className="gp-tag gp-tag-green">About Neurotherapy</span>
            <h3>What is LMNT?</h3>
            <p className="gp-designation">Lajpatrai Mehra Neurotherapy · Ancient Science + Modern Physiology</p>
            <p className="gp-desc">
              A unique, drugless system of health restoration — no medicines, no injections, no surgery.
              Combines ancient Indian healing wisdom with modern physiological science.
            </p>
            <div className="gp-mini-stats">
              <div><strong>0</strong><span>Side Effects</span></div>
              <div><strong>All</strong><span>Age Groups</span></div>
              <div><strong>Root</strong><span>Cause Treatment</span></div>
            </div>
            <Link to="/about-lmnt" className="gp-btn gp-btn-green">
              Learn About LMNT →
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default GurujiPreview;
