import { Link } from 'react-router-dom';
import { treatments } from '../../data/treatments';
import './Treatments.css';

const Treatments = () => {
  return (
    <section id="treatments" className="treatments-section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-subtitle">Our Treatments</span>
          <h2 className="section-title">
            Conditions We <span className="highlight">Treat</span>
          </h2>
          <p className="section-desc" style={{ margin: '16px auto 0', textAlign: 'center' }}>
            Natural neurotherapy solutions for a wide range of chronic pain and nervous system conditions.
          </p>
        </div>

        <div className="treatments-grid">
          {treatments.map((t, i) => (
            <Link
              key={t.slug}
              to={`/treatment/${t.slug}`}
              className="treatment-card"
              data-aos="fade-up"
              data-aos-delay={i * 50}
            >
              <div className="treatment-img-wrap">
                <img src={t.img} alt={t.title} loading="lazy" />
                <div className="treatment-img-overlay"></div>
              </div>
              <div className="treatment-body">
                <h3 className="treatment-title">{t.title}</h3>
                <p className="treatment-desc">{t.shortDesc}</p>
                <span className="treatment-btn">Learn More →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Treatments;
