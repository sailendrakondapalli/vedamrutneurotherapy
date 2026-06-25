import './Benefits.css';

const benefits = [
  "Drug Free — No medication required",
  "Natural Healing through body's own power",
  "Improves Blood Circulation throughout the body",
  "Reduces Chronic Pain effectively and safely",
  "Boosts Mobility and flexibility",
  "Improves Nerve Function and nerve health",
  "No Hospital Admission required",
  "Fast Recovery with lasting results",
];

const Benefits = () => {
  return (
    <section id="benefits" className="benefits-section">
      <div className="container">
        <div className="benefits-grid">
          <div className="benefits-image" data-aos="fade-right" data-aos-duration="900">
            <div className="benefits-img-main">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=700&q=80"
                alt="Neurotherapy benefits illustration"
                loading="lazy"
              />
            </div>
            <div className="benefits-img-float">
              <img
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300&q=80"
                alt="Yoga and wellness"
                loading="lazy"
              />
            </div>
            <div className="benefits-stat-bubble">
              <span>98%</span>
              <small>Patient Satisfaction</small>
            </div>
          </div>

          <div className="benefits-content" data-aos="fade-left" data-aos-duration="900" data-aos-delay="100">
            <span className="section-subtitle">Benefits</span>
            <h2 className="section-title">
              Why Neurotherapy <span className="highlight">Works</span>
            </h2>
            <p className="section-desc" style={{ marginTop: '16px' }}>
              Experience the transformative power of natural neurotherapy — a holistic approach
              that heals from within without any side effects.
            </p>

            <ul className="benefits-list">
              {benefits.map((b, i) => (
                <li
                  key={i}
                  className="benefit-item"
                  data-aos="fade-up"
                  data-aos-delay={i * 80}
                >
                  <span className="benefit-check">✓</span>
                  <span className="benefit-text">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
