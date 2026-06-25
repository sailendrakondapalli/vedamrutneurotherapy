import { Link } from 'react-router-dom';
import './About.css';

const features = [
  { icon: '🌿', label: 'Natural Healing' },
  { icon: '🏅', label: 'Certified Therapist' },
  { icon: '🎯', label: 'Personalized Treatment' },
  { icon: '💰', label: 'Affordable Care' },
  { icon: '🛡️', label: 'Safe Methods' },
];

const About = () => {
  const waNumber = '918499011209';
  const waMsg = encodeURIComponent('Hello! I would like to know more about Vedamrut Pain Management & Neurotherapy Treatment Centre.');

  return (
    <section id="about" className="about-section">
      <div className="about-bg-pattern"></div>
      <div className="container">
        <div className="about-grid">
          <div className="about-image-wrapper" data-aos="fade-right" data-aos-duration="800">
            <div className="about-img-card">
              <img
                src="/images/doctor.png"
                alt="NT. Parmar Ashok Kumar - Vedamrut Neurotherapy"
                loading="lazy"
              />
            </div>
            <div className="about-badge-card">
              <span className="badge-num">10+</span>
              <span className="badge-txt">Years of Trusted Healing</span>
            </div>
            <div className="about-img-accent"></div>
          </div>

          <div className="about-content" data-aos="fade-left" data-aos-duration="800" data-aos-delay="100">
            <span className="section-subtitle">About Us</span>
            <h2 className="section-title">
              About <span className="highlight">Vedamrut</span> Treatment Centre
            </h2>
            <p className="about-desc">
              Vedamrut Pain Management & Neurotherapy Treatment Centre is dedicated to providing natural,
              non-invasive neurotherapy treatments for various chronic pain conditions. Our mission is to
              improve the quality of life through safe, drug-free and surgery-free therapies.
            </p>
            <p className="about-desc" style={{ marginTop: '16px' }}>
              Under the expert guidance of <strong>NT. Parmar Ashok Kumar</strong>, we have helped over
              1500+ patients rediscover a pain-free life through our scientifically proven neurotherapy methods
              that work in harmony with the body's natural healing process.
            </p>

            <div className="about-features">
              {features.map((f, i) => (
                <div key={i} className="about-feature-item" data-aos="fade-up" data-aos-delay={i * 80}>
                  <span className="feature-icon">{f.icon}</span>
                  <span className="feature-label">{f.label}</span>
                </div>
              ))}
            </div>

            <Link to="/about" className="btn-primary about-cta">
              Read More →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
