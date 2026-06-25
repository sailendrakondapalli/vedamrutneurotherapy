import './WhyChoose.css';

const reasons = [
  { icon: '💊', title: 'No Medicines', desc: 'Treatment without any pharmaceutical drugs or chemicals.' },
  { icon: '🔪', title: 'No Surgery', desc: 'Completely non-invasive approach to pain relief.' },
  { icon: '✅', title: 'No Side Effects', desc: 'Safe natural therapies with zero adverse effects.' },
  { icon: '🌿', title: 'Natural Healing', desc: "Harnesses the body's own healing mechanisms." },
  { icon: '👨‍⚕️', title: 'Experienced Therapist', desc: '10+ years of expertise in neurotherapy treatments.' },
  { icon: '💰', title: 'Affordable Treatment', desc: 'Premium care at accessible and fair pricing.' },
  { icon: '🎯', title: 'Personalized Care', desc: 'Customized treatment plans for every patient.' },
  { icon: '♾️', title: 'Long Lasting Relief', desc: 'Address the root cause for permanent results.' },
];

const WhyChoose = () => {
  return (
    <section className="why-section">
      <div className="why-bg">
        <img
          src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&q=80"
          alt="Wellness background"
          loading="lazy"
        />
        <div className="why-overlay"></div>
      </div>

      <div className="container why-inner">
        <div className="section-header" data-aos="fade-up">
          <span className="section-subtitle" style={{ color: '#6ee7b7' }}>Why Choose Us</span>
          <h2 className="section-title" style={{ color: 'white' }}>
            Reasons to Trust <span style={{ color: '#6ee7b7' }}>Vedamrut</span>
          </h2>
          <p className="section-desc" style={{ color: 'rgba(255,255,255,0.8)', margin: '16px auto 0' }}>
            We combine decades of experience with natural healing techniques to deliver lasting pain relief.
          </p>
        </div>

        <div className="why-grid">
          {reasons.map((item, i) => (
            <div
              key={i}
              className="why-card"
              data-aos="zoom-in"
              data-aos-delay={i * 60}
            >
              <div className="why-icon">{item.icon}</div>
              <h3 className="why-title">{item.title}</h3>
              <p className="why-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
