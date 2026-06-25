import './Achievements.css';

const achievements = [
  { icon: '🏆', title: 'Best Neurotherapy Award', desc: 'Recognized as the best neurotherapy centre in Warangal district.' },
  { icon: '🎓', title: 'Certified Therapist', desc: 'NT. Parmar Ashok Kumar is nationally certified in neurotherapy.' },
  { icon: '❤️', title: 'Trusted by 1500+ Patients', desc: 'Over a decade of building trust through results-driven treatment.' },
  { icon: '📚', title: 'Professional Training', desc: 'Continuous learning with advanced neurotherapy methods and techniques.' },
];

const Achievements = () => {
  return (
    <section className="achievements-section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-subtitle">Achievements</span>
          <h2 className="section-title">
            Our <span className="highlight">Recognition</span>
          </h2>
        </div>
        <div className="achievements-grid">
          {achievements.map((a, i) => (
            <div key={i} className="achievement-card" data-aos="fade-up" data-aos-delay={i * 80}>
              <div className="achievement-icon">{a.icon}</div>
              <h3 className="achievement-title">{a.title}</h3>
              <p className="achievement-desc">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
